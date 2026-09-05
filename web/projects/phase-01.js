/* ══════════════════════════════════════════════
   DEVYOON — Projet Web · Phase 01
   Fichier isolé : ne contient QUE la config de cette
   phase. Chargé uniquement quand ?phase=01.
══════════════════════════════════════════════ */

window.PROJECT_CONFIG = {
  title: "Ta page personnelle",
  briefFile: "phase-01-projet.html",
  coursFile: "phase-01-cours.html",

  starterHTML: `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Ma page personnelle</title>
  <link rel="stylesheet" href="style.css"/>
</head>
<body>

  <header>
    <!-- OBJECTIF 1 : ton nom dans un h1, + une phrase d'accroche -->

  </header>

  <main>

    <section id="apropos">
      <h2>À propos</h2>
      <!-- OBJECTIF 2 : un paragraphe qui parle de toi -->

    </section>

    <section id="competences">
      <h2>Compétences</h2>
      <!-- OBJECTIF 3 : une liste ul avec au moins 3 li -->

    </section>

    <section id="contact">
      <h2>Contact</h2>
      <!-- OBJECTIF 4 : un lien mailto: ou vers un réseau -->

    </section>

  </main>

  <footer>
    <!-- OBJECTIF 5 : une mention en pied de page -->

  </footer>

</body>
</html>`,

  starterCSS: `/* ── Ma page personnelle ── */

body {
  font-family: 'Inter', sans-serif;
  max-width: 720px;
  margin: 40px auto;
  padding: 0 20px;
  background: #0A0E1A;
  color: #F0F4FF;
  line-height: 1.7;
}

h1 { font-size: 2rem; }
h2 { font-size: 1.2rem; margin-top: 28px; color: #FF6B35; }
a { color: #FF6B35; }
ul { padding-left: 20px; }
li { margin: 6px 0; }
footer { margin-top: 40px; font-size: .85rem; opacity: .6; }

/* OBJECTIF 6 : ajoute au moins une classe CSS ici, ex. .carte { ... } */
`,

  objectives: [
    { label: 'En-tête avec ton nom', hint: 'Un <code>&lt;h1&gt;</code> dans un <code>&lt;header&gt;</code>',
      test: html => /<header[\s\S]*?<h1[^>]*>([\s\S]*?)<\/h1>[\s\S]*?<\/header>/i.test(html) && /<h1[^>]*>([\s\S]*?)<\/h1>/i.exec(html)[1].trim().length > 1 },
    { label: 'Section "À propos" rédigée', hint: "Un <code>&lt;p&gt;</code> d'au moins quelques phrases",
      test: html => { const m = html.match(/<p[^>]*>([\s\S]*?)<\/p>/i); return !!(m && m[1].replace(/<[^>]+>/g,'').trim().length > 30); } },
    { label: 'Liste de compétences (3 min.)', hint: 'Une <code>&lt;ul&gt;</code> avec au moins 3 <code>&lt;li&gt;</code>',
      test: html => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.querySelectorAll('ul li').length >= 3;
      } },
    { label: 'Lien de contact fonctionnel', hint: 'Un <code>&lt;a href="mailto:..."&gt;</code> ou un lien vers un réseau',
      test: html => /<a[^>]+href=["'](mailto:|https?:\/\/)[^"']+["']/i.test(html) },
    { label: 'Pied de page présent', hint: 'Une balise <code>&lt;footer&gt;</code> non vide',
      test: html => { const m = html.match(/<footer[^>]*>([\s\S]*?)<\/footer>/i); return !!(m && m[1].replace(/<[^>]+>/g,'').trim().length > 0); } },
    { label: 'Mise en forme personnalisée', hint: 'Ajoute au moins une règle CSS avec une classe (<code>.ma-classe { ... }</code>)',
      test: (html, css) => /\.[a-zA-Z][\w-]*\s*\{[^}]*\}/.test(css) }
  ],

  mockupHTML: css => `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/><style>${css}</style></head><body>
<header><h1>Aminata Diop</h1><p>Étudiante en informatique, en apprentissage du développement web.</p></header>
<main>
<section><h2>À propos</h2><p>Je suis en formation autodidacte en développement web. Je construis ce genre de page pour pratiquer le HTML et le CSS sur des projets concrets, pas juste des exercices isolés.</p></section>
<section><h2>Compétences</h2><ul><li>HTML sémantique</li><li>CSS (mise en page, couleurs)</li><li>Bases de JavaScript</li></ul></section>
<section><h2>Contact</h2><p><a href="mailto:aminata@example.com">aminata@example.com</a></p></section>
</main>
<footer>© 2026 Aminata Diop</footer>
</body></html>`
};
