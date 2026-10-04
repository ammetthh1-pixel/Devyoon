/* ══════════════════════════════════════════════
   DEVYOON — Projet Web · Phase 06
   Simulateur d'API REST en JavaScript pur (pas de
   vrai serveur Node exécutable dans le navigateur).
   Les objectifs simulent de vrais clics et lisent le
   DOM résultant — un test comportemental, pas juste
   une recherche de motif dans le code source.
   Fichier isolé, chargé uniquement quand ?phase=06.
══════════════════════════════════════════════ */

window.PROJECT_CONFIG = {
  title: "Simulateur d'API REST",
  briefFile: "phase-06-projet.html",
  coursFile: "phase-06-cours-1.html",

  starterHTML: `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Simulateur d'API REST</title>
  <link rel="stylesheet" href="style.css"/>
</head>
<body>

  <header>
    <h1>Simulateur d'API — /api/taches</h1>
    <p>Chaque bouton simule une requête HTTP vers l'API.</p>
  </header>

  <main>
    <div class="requetes">
      <button id="btn-get">GET /api/taches</button>
      <button id="btn-post">POST /api/taches</button>
      <button id="btn-put">PUT /api/taches/1</button>
      <button id="btn-delete">DELETE /api/taches/2</button>
    </div>

    <pre id="resultat">Clique un bouton pour voir le résultat ici.</pre>
  </main>

</body>
</html>`,

  starterCSS: `/* ── Simulateur d'API ── */

body {
  font-family: 'Inter', sans-serif;
  max-width: 560px;
  margin: 40px auto;
  padding: 0 20px;
  background: #0A0E1A;
  color: #F0F4FF;
}

h1 { font-size: 1.4rem; margin-bottom: 4px; }
header p { color: #7A8BAD; font-size: .85rem; }

.requetes { display: flex; flex-wrap: wrap; gap: 8px; margin: 20px 0; }
.requetes button {
  background: #1C2333;
  color: #FF6B35;
  border: 1px solid #1E2D45;
  border-radius: 6px;
  padding: 8px 12px;
  font-family: 'Fira Code', monospace;
  font-size: .78rem;
  cursor: pointer;
}

#resultat {
  background: #06090F;
  border: 1px solid #1E2D45;
  border-radius: 8px;
  padding: 16px;
  font-family: 'Fira Code', monospace;
  font-size: .82rem;
  white-space: pre-wrap;
  color: #00C896;
  min-height: 60px;
}
`,

  starterJS: `let taches = [
  { id: 1, texte: "Réviser Express", terminee: false },
  { id: 2, texte: "Comprendre SQL", terminee: false }
];
let prochainId = 3;

function getTaches() {
  // TODO 1 : retourne le tableau "taches"
}

function creerTache(texte) {
  // TODO 2 : crée un objet { id: prochainId++, texte, terminee: false },
  // ajoute-le au tableau "taches", puis retourne cet objet
}

function modifierTache(id, terminee) {
  // TODO 3 : trouve dans "taches" l'objet dont l'id correspond,
  // modifie sa propriété "terminee", puis retourne cet objet
  // (ou null si aucune tâche ne correspond à cet id)
}

function supprimerTache(id) {
  // TODO 4 : retire de "taches" l'objet dont l'id correspond,
  // puis retourne le tableau "taches" mis à jour
}

/* ── Interface déjà fournie : ne pas modifier ── */
function afficher(resultat) {
  document.querySelector("#resultat").textContent = JSON.stringify(resultat, null, 2);
}
document.querySelector("#btn-get").addEventListener("click", () => afficher(getTaches()));
document.querySelector("#btn-post").addEventListener("click", () => afficher(creerTache("Nouvelle tâche")));
document.querySelector("#btn-put").addEventListener("click", () => afficher(modifierTache(1, true)));
document.querySelector("#btn-delete").addEventListener("click", () => afficher(supprimerTache(2)));
`,

  objectives: [
    { label: 'GET — lire toutes les tâches', hint: 'getTaches() renvoie le tableau complet',
      test: (html, css, js, doc) => {
        const btn = doc.querySelector('#btn-get');
        if (!btn) return false;
        btn.click();
        const out = doc.querySelector('#resultat');
        return !!out && out.textContent.includes('Réviser Express') && out.textContent.includes('Comprendre SQL');
      } },
    { label: 'POST — créer une tâche', hint: 'creerTache(texte) ajoute une tâche avec un nouvel id',
      test: (html, css, js, doc) => {
        const btnPost = doc.querySelector('#btn-post');
        const btnGet = doc.querySelector('#btn-get');
        if (!btnPost || !btnGet) return false;
        btnPost.click();
        btnGet.click();
        const out = doc.querySelector('#resultat');
        return !!out && out.textContent.includes('Nouvelle tâche');
      } },
    { label: 'PUT — modifier une tâche', hint: 'modifierTache(id, terminee) met à jour la bonne tâche',
      test: (html, css, js, doc) => {
        const btn = doc.querySelector('#btn-put');
        if (!btn) return false;
        btn.click();
        const out = doc.querySelector('#resultat');
        return !!out && /"id":\s*1/.test(out.textContent) && /"terminee":\s*true/.test(out.textContent);
      } },
    { label: 'DELETE — supprimer une tâche', hint: 'supprimerTache(id) retire la bonne tâche du tableau',
      test: (html, css, js, doc) => {
        const btnDel = doc.querySelector('#btn-delete');
        const btnGet = doc.querySelector('#btn-get');
        if (!btnDel || !btnGet) return false;
        btnDel.click();
        btnGet.click();
        const out = doc.querySelector('#resultat');
        return !!out && !out.textContent.includes('Comprendre SQL') && out.textContent.includes('Réviser Express');
      } }
  ],

  mockupHTML: css => `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/><style>${css}</style></head><body>
<header><h1>Simulateur d'API — /api/produits</h1><p>Chaque bouton simule une requête HTTP vers l'API.</p></header>
<main>
<div class="requetes">
<button id="btn-get">GET /api/produits</button>
<button id="btn-post">POST /api/produits</button>
</div>
<pre id="resultat">[{"id":1,"nom":"Casque audio","prix":15000},{"id":2,"nom":"Clavier","prix":8000}]</pre>
</main>
</body></html>`
};
