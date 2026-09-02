/* ══════════════════════════════════════════════
   DEVYOON — Configuration Supabase
   ──────────────────────────────────────────────
   Réutilise le MÊME projet Supabase que DevKëf.
   Va chercher ces deux valeurs dans ton tableau de
   bord Supabase : Project Settings → API

     - Project URL         → SUPABASE_URL
     - anon / public key    → SUPABASE_ANON_KEY

   ⚠️ N'oublie pas d'ajouter l'URL de déploiement de
   DevYoon (ton domaine *.pages.dev) dans :
   Authentication → URL Configuration → Redirect URLs
   — sinon les emails de confirmation/connexion
   pointeront vers le mauvais site.
══════════════════════════════════════════════ */

window.DEVYOON_CONFIG = {
  SUPABASE_URL: "https://zurgamfwxphjymbkefan.supabase.co",
  SUPABASE_ANON_KEY: "ta-clé-anon-identique-à-devkef",

  // Nombre total de phases prévues par parcours (sert au calcul de
  // progression et au badge "parcours complet" — à ajuster si le
  // découpage du changelog change).
  TRACK_TOTALS: {
    web: 8,
    ia: 7
  }
};
