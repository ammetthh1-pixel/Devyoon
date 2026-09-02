/* ══════════════════════════════════════════════
   DEVYOON — auth.js
   Authentification par email + mot de passe, sur
   le même projet Supabase que DevKëf.
   Nécessite config.js chargé avant ce fichier, et
   la librairie supabase-js (CDN) chargée aussi.
══════════════════════════════════════════════ */

let _supabase = null;

function getSupabase() {
  if (_supabase) return _supabase;
  const { SUPABASE_URL, SUPABASE_ANON_KEY } = window.DEVYOON_CONFIG || {};
  if (!SUPABASE_URL || SUPABASE_URL.startsWith("COLLE_")) {
    console.warn("[DevYoon] config.js n'est pas encore renseigné avec les identifiants Supabase.");
    return null;
  }
  _supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  return _supabase;
}

/** Inscription par email + mot de passe. */
async function devyoonSignUp(email, password) {
  const client = getSupabase();
  if (!client) return { error: { message: "Configuration Supabase manquante." } };
  return await client.auth.signUp({ email, password });
}

/** Connexion par email + mot de passe (même compte que DevKëf). */
async function devyoonSignIn(email, password) {
  const client = getSupabase();
  if (!client) return { error: { message: "Configuration Supabase manquante." } };
  return await client.auth.signInWithPassword({ email, password });
}

/** Déconnexion. */
async function devyoonSignOut() {
  const client = getSupabase();
  if (!client) return;
  await client.auth.signOut();
}

/** Session actuelle (null si non connecté). */
async function devyoonGetSession() {
  const client = getSupabase();
  if (!client) return null;
  const { data } = await client.auth.getSession();
  return data.session;
}

/** Utilisateur actuel (null si non connecté). */
async function devyoonGetUser() {
  const session = await devyoonGetSession();
  return session ? session.user : null;
}

/** S'abonne aux changements d'état de connexion. */
function devyoonOnAuthChange(callback) {
  const client = getSupabase();
  if (!client) return;
  client.auth.onAuthStateChange((_event, session) => callback(session));
}

/**
 * Protège une page : redirige vers login.html si personne n'est connecté.
 * À appeler en haut des pages qui nécessitent un compte (ex. dashboard.html).
 */
async function devyoonRequireAuth(loginPath) {
  const user = await devyoonGetUser();
  if (!user) {
    window.location.href = loginPath || "../login.html";
    return null;
  }
  return user;
}
