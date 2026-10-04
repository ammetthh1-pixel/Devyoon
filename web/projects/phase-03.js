/* ══════════════════════════════════════════════
   DEVYOON — Projet Web · Phase 03
   Premier projet avec un onglet JavaScript (starterJS).
   Fichier isolé : ne contient QUE la config de cette
   phase. Chargé uniquement quand ?phase=03.
══════════════════════════════════════════════ */

window.PROJECT_CONFIG = {
  title: "Ta liste de tâches",
  briefFile: "phase-03-projet.html",
  coursFile: "phase-03-cours-1.html",

  starterHTML: `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Ma liste de tâches</title>
  <link rel="stylesheet" href="style.css"/>
</head>
<body>

  <header>
    <h1>Ma liste de tâches</h1>
  </header>

  <main>
    <div class="ajout">
      <input type="text" id="nouvelle-tache" placeholder="Nouvelle tâche..."/>
      <button id="ajouter">Ajouter</button>
    </div>

    <ul id="liste-taches">
      <!-- Les tâches ajoutées apparaîtront ici -->
    </ul>
  </main>

</body>
</html>`,

  starterCSS: `/* ── Ma liste de tâches ── */

body {
  font-family: 'Inter', sans-serif;
  max-width: 480px;
  margin: 40px auto;
  padding: 0 20px;
  background: #0A0E1A;
  color: #F0F4FF;
}

h1 { font-size: 1.6rem; }

.ajout { display: flex; gap: 10px; margin: 20px 0; }
.ajout input {
  flex: 1;
  padding: 10px 12px;
  background: #1C2333;
  border: 1px solid #1E2D45;
  border-radius: 6px;
  color: #F0F4FF;
}
.ajout button {
  background: #FF6B35;
  color: #0A0E1A;
  border: none;
  border-radius: 6px;
  padding: 10px 18px;
  font-weight: 700;
  cursor: pointer;
}

#liste-taches { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 8px; }
#liste-taches li {
  background: #1C2333;
  border: 1px solid #1E2D45;
  border-radius: 6px;
  padding: 10px 14px;
  cursor: pointer;
}

/* Classe à utiliser en JS (classList.toggle) pour une tâche terminée */
.terminee {
  text-decoration: line-through;
  opacity: .5;
}
`,

  starterJS: `const input = document.querySelector("#nouvelle-tache");
const bouton = document.querySelector("#ajouter");
const liste = document.querySelector("#liste-taches");

bouton.addEventListener("click", () => {
  // TODO 1 : si input.value est vide (après trim()), ne rien faire (return)

  // TODO 2 : crée un <li> avec document.createElement, mets-y le texte
  //          saisi, puis ajoute-le à "liste" avec appendChild

  // TODO 3 : vide le champ input après l'ajout
});

// TODO 4 : ajoute un écouteur "click" sur "liste" (délégation d'événements)
//          qui bascule la classe "terminee" sur l'élément cliqué
`,

  objectives: [
    { label: 'Structure de base présente', hint: 'Un <code>input#nouvelle-tache</code>, un <code>button#ajouter</code> et une <code>ul#liste-taches</code>',
      test: html => /id=["']nouvelle-tache["']/.test(html) && /id=["']ajouter["']/.test(html) && /id=["']liste-taches["']/.test(html) },
    { label: "Écouteur sur le bouton d'ajout", hint: '<code>addEventListener("click", ...)</code> sur le bouton',
      test: (html, css, js) => /addEventListener\s*\(\s*["']click["']/.test(js) },
    { label: 'Création et insertion de la tâche', hint: '<code>document.createElement</code> puis <code>appendChild</code>',
      test: (html, css, js) => /createElement\s*\(/.test(js) && /appendChild\s*\(/.test(js) },
    { label: 'Le champ se vide après ajout', hint: 'Remettre <code>input.value</code> à une chaîne vide après avoir ajouté la tâche',
      test: (html, css, js) => /\.value\s*=\s*["']["']/.test(js) },
    { label: "Pas d'ajout de tâche vide", hint: 'Vérifier <code>.trim()</code> avant de créer la tâche',
      test: (html, css, js) => /\.trim\s*\(\s*\)/.test(js) },
    { label: 'Marquer une tâche terminée (délégation)', hint: 'Un écouteur sur <code>liste</code> qui utilise <code>classList.toggle</code>',
      test: (html, css, js) => {
        const listeListener = /liste\s*\.\s*addEventListener\s*\(\s*["']click["']/.test(js);
        const toggle = /classList\.toggle\s*\(\s*["']terminee["']/.test(js);
        return listeListener && toggle;
      } }
  ],

  mockupHTML: css => `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/><style>${css}</style></head><body>
<header><h1>Ma liste de tâches</h1></header>
<main>
<div class="ajout"><input type="text" id="nouvelle-tache" placeholder="Nouvelle tâche..."/><button id="ajouter">Ajouter</button></div>
<ul id="liste-taches">
<li>Réviser le cours 2 (DOM)</li>
<li class="terminee">Terminer le cours 1</li>
<li>Écrire le script d'ajout</li>
</ul>
</main>
<script>
document.querySelector('#ajouter').addEventListener('click', () => {
  const input = document.querySelector('#nouvelle-tache');
  if (input.value.trim() === '') return;
  const li = document.createElement('li');
  li.textContent = input.value;
  document.querySelector('#liste-taches').appendChild(li);
  input.value = '';
});
document.querySelector('#liste-taches').addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') e.target.classList.toggle('terminee');
});
<\/script>
</body></html>`
};
