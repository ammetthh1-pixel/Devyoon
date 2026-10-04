/* ══════════════════════════════════════════════
   DEVYOON — Projet Web · Phase 04
   Quiz sur le terminal et Git (pas de vrai terminal
   exécutable dans le navigateur — voir le brief pour
   le volet "dépôt réel" auto-dirigé).
══════════════════════════════════════════════ */

window.PROJECT_CONFIG = {
  type: "quiz",
  title: "Quiz — Terminal & Git",
  briefFile: "phase-04-projet.html",
  coursFile: "phase-04-cours-1.html",

  starterHTML: `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Quiz — Terminal & Git</title>
</head>
<body>
  <main class="quiz">
    <h1>Quiz — Terminal & Git</h1>
    <p>Réponds aux huit questions, puis clique sur Valider.</p>

    <fieldset data-question="1">
      <legend>1. Quelle commande affiche le dossier courant ?</legend>
      <label><input type="radio" name="q1" value="a"> ls</label>
      <label><input type="radio" name="q1" value="b"> pwd</label>
      <label><input type="radio" name="q1" value="c"> cd</label>
    </fieldset>

    <fieldset data-question="2">
      <legend>2. Quelle commande liste le contenu d'un dossier ?</legend>
      <label><input type="radio" name="q2" value="a"> ls</label>
      <label><input type="radio" name="q2" value="b"> mkdir</label>
      <label><input type="radio" name="q2" value="c"> rm</label>
    </fieldset>

    <fieldset data-question="3">
      <legend>3. Que fait "git init" ?</legend>
      <label><input type="radio" name="q3" value="a"> Envoie le code sur GitHub</label>
      <label><input type="radio" name="q3" value="b"> Transforme le dossier courant en dépôt Git</label>
      <label><input type="radio" name="q3" value="c"> Supprime l'historique</label>
    </fieldset>

    <fieldset data-question="4">
      <legend>4. Dans quel ordre utilise-t-on ces commandes pour enregistrer un changement ?</legend>
      <label><input type="radio" name="q4" value="a"> commit puis add</label>
      <label><input type="radio" name="q4" value="b"> add puis commit</label>
      <label><input type="radio" name="q4" value="c"> push puis add</label>
    </fieldset>

    <fieldset data-question="5">
      <legend>5. Quelle commande affiche l'état actuel du dépôt (fichiers modifiés, etc.) ?</legend>
      <label><input type="radio" name="q5" value="a"> git status</label>
      <label><input type="radio" name="q5" value="b"> git log</label>
      <label><input type="radio" name="q5" value="c"> git branch</label>
    </fieldset>

    <fieldset data-question="6">
      <legend>6. À quoi sert le fichier .gitignore ?</legend>
      <label><input type="radio" name="q6" value="a"> Il liste les fichiers à ne jamais suivre par Git</label>
      <label><input type="radio" name="q6" value="b"> Il contient l'historique des commits</label>
      <label><input type="radio" name="q6" value="c"> Il configure le nom d'utilisateur Git</label>
    </fieldset>

    <fieldset data-question="7">
      <legend>7. Quelle commande envoie un dépôt local vers GitHub ?</legend>
      <label><input type="radio" name="q7" value="a"> git pull</label>
      <label><input type="radio" name="q7" value="b"> git clone</label>
      <label><input type="radio" name="q7" value="c"> git push</label>
    </fieldset>

    <fieldset data-question="8">
      <legend>8. Depuis 2021, que faut-il utiliser à la place du mot de passe pour un push HTTPS sur GitHub ?</legend>
      <label><input type="radio" name="q8" value="a"> Un token d'accès personnel</label>
      <label><input type="radio" name="q8" value="b"> Le code PIN GitHub</label>
      <label><input type="radio" name="q8" value="c"> Rien, le mot de passe fonctionne toujours</label>
    </fieldset>
  </main>
</body>
</html>`,

  starterCSS: `body {
  font-family: 'Inter', sans-serif;
  max-width: 760px;
  margin: 0 auto;
  padding: 32px 20px;
  background: #0A0E1A;
  color: #F0F4FF;
  line-height: 1.6;
}

.quiz { display: grid; gap: 20px; }
fieldset { border: 1px solid #1E2D45; border-radius: 8px; padding: 16px; background: #1C2333; }
legend { color: #FF6B35; font-weight: 700; padding: 0 6px; }
label { display: block; margin: 10px 0; cursor: pointer; }
`,

  objectives: [
    { label: 'Question 1 — se repérer', hint: 'pwd affiche le dossier courant' },
    { label: 'Question 2 — lister', hint: "ls liste le contenu d'un dossier" },
    { label: 'Question 3 — git init', hint: 'Transforme un dossier en dépôt Git' },
    { label: 'Question 4 — cycle add/commit', hint: 'add avant commit' },
    { label: 'Question 5 — git status', hint: "Affiche l'état du dépôt" },
    { label: 'Question 6 — .gitignore', hint: 'Fichiers jamais suivis par Git' },
    { label: 'Question 7 — git push', hint: 'Envoie le dépôt local vers le distant' },
    { label: 'Question 8 — authentification', hint: 'Token plutôt que mot de passe depuis 2021' }
  ],

  answers: ['b', 'a', 'b', 'b', 'a', 'a', 'c', 'a'],

  validateQuiz: doc => {
    return window.PROJECT_CONFIG.answers.map((answer, index) => {
      const selected = doc.querySelector(`input[name="q${index + 1}"]:checked`);
      return !!selected && selected.value === answer;
    });
  },

  mockupHTML: css => `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"/><style>${css}</style></head><body><main class="quiz"><h1>Quiz — Terminal & Git</h1><p>Réponds aux huit questions dans ton aperçu, une réponse par question.</p></main></body></html>`
};
