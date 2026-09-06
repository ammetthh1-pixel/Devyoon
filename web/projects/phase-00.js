/* ══════════════════════════════════════════════
   DEVYOON — Projet Web · Phase 00
   Quiz de validation sur les bases du fonctionnement du web.
══════════════════════════════════════════════ */

window.PROJECT_CONFIG = {
  type: "quiz",
  title: "Quiz — Comment marche le web",
  briefFile: "phase-00-projet.html",
  coursFile: "phase-00-cours.html",

  starterHTML: `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Quiz — Comment marche le web</title>
</head>
<body>
  <main class="quiz">
    <h1>Quiz — Comment marche le web</h1>
    <p>Réponds aux six questions, puis clique sur Valider.</p>

    <fieldset data-question="1">
      <legend>1. Quel est le rôle principal du client ?</legend>
      <label><input type="radio" name="q1" value="a"> Héberger les fichiers du site</label>
      <label><input type="radio" name="q1" value="b"> Envoyer des demandes et afficher les réponses</label>
      <label><input type="radio" name="q1" value="c"> Traduire les noms de domaine en adresses IP</label>
    </fieldset>

    <fieldset data-question="2">
      <legend>2. Que fait le DNS ?</legend>
      <label><input type="radio" name="q2" value="a"> Il traduit un nom de domaine en adresse IP</label>
      <label><input type="radio" name="q2" value="b"> Il met en forme le HTML</label>
      <label><input type="radio" name="q2" value="c"> Il affiche la page dans le navigateur</label>
    </fieldset>

    <fieldset data-question="3">
      <legend>3. Quelle méthode HTTP demande généralement une page ?</legend>
      <label><input type="radio" name="q3" value="a"> POST</label>
      <label><input type="radio" name="q3" value="b"> DELETE</label>
      <label><input type="radio" name="q3" value="c"> GET</label>
    </fieldset>

    <fieldset data-question="4">
      <legend>4. Que signifie le code HTTP 200 ?</legend>
      <label><input type="radio" name="q4" value="a"> La page est introuvable</label>
      <label><input type="radio" name="q4" value="b"> La demande a réussi</label>
      <label><input type="radio" name="q4" value="c"> Le serveur est en erreur</label>
    </fieldset>

    <fieldset data-question="5">
      <legend>5. Qui envoie la requête HTTP ?</legend>
      <label><input type="radio" name="q5" value="a"> Le navigateur, donc le client</label>
      <label><input type="radio" name="q5" value="b"> Le DNS uniquement</label>
      <label><input type="radio" name="q5" value="c"> Le serveur vers lui-même</label>
    </fieldset>

    <fieldset data-question="6">
      <legend>6. Que fait le navigateur après avoir reçu le HTML ?</legend>
      <label><input type="radio" name="q6" value="a"> Il transforme le HTML en adresse IP</label>
      <label><input type="radio" name="q6" value="b"> Il lit le HTML et affiche la page</label>
      <label><input type="radio" name="q6" value="c"> Il supprime la réponse du serveur</label>
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
    { label: 'Question 1 — client', hint: 'Identifier le rôle du navigateur/client' },
    { label: 'Question 2 — DNS', hint: 'Expliquer la traduction domaine → adresse IP' },
    { label: 'Question 3 — HTTP', hint: 'Reconnaître la méthode GET' },
    { label: 'Question 4 — statut', hint: 'Reconnaître le code 200 OK' },
    { label: 'Question 5 — requête', hint: 'Identifier l\'émetteur de la requête' },
    { label: 'Question 6 — affichage', hint: 'Décrire le rôle final du navigateur' }
  ],

  answers: ['b', 'a', 'c', 'b', 'a', 'b'],

  validateQuiz: doc => {
    return window.PROJECT_CONFIG.answers.map((answer, index) => {
      const selected = doc.querySelector(`input[name="q${index + 1}"]:checked`);
      return !!selected && selected.value === answer;
    });
  },

  mockupHTML: css => `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"/><style>${css}</style></head><body><main class="quiz"><h1>Quiz — Comment marche le web</h1><p>Réponds aux six questions dans ton aperçu.</p><p>Le quiz est déjà prêt : sélectionne une réponse par question.</p></main></body></html>`
};
