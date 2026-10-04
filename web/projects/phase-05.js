/* ══════════════════════════════════════════════
   DEVYOON — Projet Web · Phase 05
   Premier projet React : starterJS contient du JSX,
   transformé dans le navigateur par Babel standalone
   (scriptType: "text/babel" indique au moteur d'injecter
   le script avec ce type plutôt que text/javascript).
   Fichier isolé, chargé uniquement quand ?phase=05.
══════════════════════════════════════════════ */

window.PROJECT_CONFIG = {
  title: "Tes tâches, en React",
  briefFile: "phase-05-projet.html",
  coursFile: "phase-05-cours-1.html",
  scriptType: "text/babel",
  jsMode: "jsx",

  starterHTML: `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Mes tâches — React</title>
  <link rel="stylesheet" href="style.css"/>
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
  <div id="root"></div>
</body>
</html>`,

  starterCSS: `/* ── Mes tâches (React) ── */

body {
  font-family: 'Inter', sans-serif;
  max-width: 480px;
  margin: 40px auto;
  padding: 0 20px;
  background: #0A0E1A;
  color: #F0F4FF;
}

h1 { font-size: 1.6rem; }

.filtres { display: flex; gap: 8px; margin: 16px 0; }
.filtres button {
  background: #1C2333;
  color: #F0F4FF;
  border: 1px solid #1E2D45;
  border-radius: 6px;
  padding: 8px 14px;
  cursor: pointer;
}

ul { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 8px; }
li {
  background: #1C2333;
  border: 1px solid #1E2D45;
  border-radius: 6px;
  padding: 10px 14px;
}

/* Classe à appliquer en JSX (className) pour une tâche terminée */
.terminee {
  text-decoration: line-through;
  opacity: .5;
}
`,

  starterJS: `const { useState } = React;

const tachesInitiales = [
  { id: 1, texte: "Réviser les hooks", terminee: false },
  { id: 2, texte: "Écrire le composant Filtre", terminee: false },
  { id: 3, texte: "Tester l'affichage", terminee: true }
];

// TODO 1 : affiche tache.texte dans un <li>, avec la classe
// "terminee" (via className) si tache.terminee est vrai
function Tache({ tache }) {
  return null;
}

function App() {
  const [taches] = useState(tachesInitiales);
  const [filtre, setFiltre] = useState("toutes");

  // TODO 2 : calcule tachesAffichees à partir de "taches" et "filtre"
  // avec .filter() — filtre vaut "toutes", "encours" ou "terminees"
  const tachesAffichees = taches;

  return (
    <div>
      <h1>Mes tâches (React)</h1>
      <div className="filtres">
        <button onClick={() => setFiltre("toutes")}>Toutes</button>
        <button onClick={() => setFiltre("encours")}>En cours</button>
        <button onClick={() => setFiltre("terminees")}>Terminées</button>
      </div>
      <ul>
        {tachesAffichees.map((t) => (
          // TODO 3 : passe "t" en prop "tache", avec une key unique (t.id)
          <Tache />
        ))}
      </ul>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
`,

  objectives: [
    { label: 'Les tâches sont affichées', hint: 'Le composant <code>Tache</code> retourne bien un <code>&lt;li&gt;</code> avec le texte',
      test: (html, css, js, doc) => {
        const items = [...doc.querySelectorAll('li')].map(li => li.textContent);
        const required = ['Réviser les hooks', 'Écrire le composant Filtre', "Tester l'affichage"];
        return required.every(t => items.some(txt => txt.includes(t)));
      } },
    { label: 'Tâche terminée visuellement distincte', hint: 'La classe <code>terminee</code> est appliquée sur le bon élément',
      test: (html, css, js, doc) => [...doc.querySelectorAll('li')].some(li => li.className.includes('terminee')) },
    { label: 'Clé unique sur chaque élément de liste', hint: 'Une prop <code>key={t.id}</code> sur <code>&lt;Tache /&gt;</code>',
      test: (html, css, js) => /key=\{/.test(js) },
    { label: 'Props transmises au composant Tache', hint: 'Une prop <code>tache={t}</code> sur <code>&lt;Tache /&gt;</code>',
      test: (html, css, js) => /<Tache[^>]*\btache=\{/.test(js) },
    { label: 'Filtrage réellement implémenté', hint: '<code>tachesAffichees</code> calculé avec <code>.filter()</code>, en utilisant "filtre"',
      test: (html, css, js) => {
        const m = js.match(/tachesAffichees\s*=\s*taches\.filter\(([\s\S]{0,150}?)\)/);
        return !!m && /filtre/.test(m[1]) && /terminee/.test(m[1]);
      } }
  ],

  mockupHTML: css => `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/><style>${css}</style></head><body>
<div id="root"></div>
<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin><\/script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin><\/script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"><\/script>
<script type="text/babel">
const { useState } = React;
const taches = [
  { id: 1, texte: "Préparer la démo", terminee: false },
  { id: 2, texte: "Relire le brief", terminee: true },
  { id: 3, texte: "Publier le lien", terminee: false }
];
function Tache({ tache }) {
  return <li className={tache.terminee ? "terminee" : ""}>{tache.texte}</li>;
}
function App() {
  const [filtre, setFiltre] = useState("toutes");
  const visibles = taches.filter(t => filtre === "toutes" ? true : (filtre === "terminees") === t.terminee);
  return (
    <div>
      <h1>Mes tâches (React)</h1>
      <div className="filtres">
        <button onClick={() => setFiltre("toutes")}>Toutes</button>
        <button onClick={() => setFiltre("encours")}>En cours</button>
        <button onClick={() => setFiltre("terminees")}>Terminées</button>
      </div>
      <ul>{visibles.map(t => <Tache key={t.id} tache={t} />)}</ul>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
<\/script>
</body></html>`
};
