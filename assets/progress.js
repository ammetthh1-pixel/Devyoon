/* ══════════════════════════════════════════════
   DEVYOON — progress.js
   Lecture/écriture de la progression dans la table
   Supabase `devyoon_progress`.

   Schéma attendu de la table (à créer côté Supabase) :
     id            uuid, clé primaire, défaut gen_random_uuid()
     user_id       uuid, référence auth.users(id)
     track         text   ('web' | 'ia')
     phase_id      text   (ex. 'web-00', 'ia-00')
     completed_at  timestamptz, défaut now()
     objectives    jsonb, nullable (détail optionnel)

   Row Level Security : policy select/insert/update
   avec la condition `user_id = auth.uid()`.
══════════════════════════════════════════════ */

const PROGRESS_TABLE = "devyoon_progress";

/** Marque une phase comme terminée pour l'utilisateur connecté. */
async function devyoonMarkComplete(track, phaseNumber, objectives) {
  const client = getSupabase();
  const user = await devyoonGetUser();
  if (!client || !user) return { error: { message: "Non connecté." } };

  const phaseId = `${track}-${String(phaseNumber).padStart(2, "0")}`;
  return await client.from(PROGRESS_TABLE).upsert(
    {
      user_id: user.id,
      track,
      phase_id: phaseId,
      completed_at: new Date().toISOString(),
      objectives: objectives || null
    },
    { onConflict: "user_id,phase_id" }
  );
}

/** Récupère toutes les phases terminées par l'utilisateur connecté, groupées par parcours. */
async function devyoonGetProgress() {
  const client = getSupabase();
  const user = await devyoonGetUser();
  const empty = { web: [], ia: [] };
  if (!client || !user) return empty;

  const { data, error } = await client
    .from(PROGRESS_TABLE)
    .select("track, phase_id, completed_at")
    .eq("user_id", user.id)
    .order("completed_at", { ascending: true });

  if (error || !data) return empty;

  const grouped = { web: [], ia: [] };
  data.forEach(row => { if (grouped[row.track]) grouped[row.track].push(row); });
  return grouped;
}

/**
 * Calcule la liste des badges obtenus à partir de la progression.
 * Retourne un tableau d'objets { id, label, track, earned }.
 */
function devyoonComputeBadges(progress) {
  const totals = (window.DEVYOON_CONFIG && window.DEVYOON_CONFIG.TRACK_TOTALS) || { web: 8, ia: 7 };
  const badges = [];

  ["web", "ia"].forEach(track => {
    const label = track === "web" ? "Web" : "IA";
    (progress[track] || []).forEach(row => {
      const num = row.phase_id.split("-")[1];
      badges.push({ id: row.phase_id, label: `${label} · Phase ${num} terminée`, track, earned: true, type: "phase" });
    });

    const done = (progress[track] || []).length;
    badges.push({
      id: `${track}-complete`,
      label: `Parcours ${label} complet`,
      track,
      earned: done >= totals[track],
      type: "track"
    });
  });

  const webDone = (progress.web || []).length >= totals.web;
  const iaDone = (progress.ia || []).length >= totals.ia;
  badges.push({ id: "polyvalent", label: "Polyvalent · Web + IA", track: "both", earned: webDone && iaDone, type: "global" });

  return badges;
}
