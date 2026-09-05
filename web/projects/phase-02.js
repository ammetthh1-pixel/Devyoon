/* ══════════════════════════════════════════════
   DEVYOON — Projet Web · Phase 02
   Fichier isolé : ne contient QUE la config de cette
   phase. Chargé uniquement quand ?phase=02.
══════════════════════════════════════════════ */

window.PROJECT_CONFIG = {
  title: "Un site vitrine responsive",
  briefFile: "phase-02-projet.html",
  coursFile: "phase-02-cours.html",

  starterHTML: `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Ma vitrine</title>
  <link rel="stylesheet" href="style.css"/>
</head>
<body>

  <header>
    <!-- OBJECTIF 1 : une nav avec des liens vers #services et #contact -->
    <nav>

    </nav>
    <h1>Nom de mon activité</h1>
    <p>Une phrase d'accroche</p>
  </header>

  <main>

    <section id="services">
      <h2>Nos services</h2>
      <div class="cartes">
        <!-- OBJECTIF 2 : au moins 3 cartes, chacune dans un div.carte -->

      </div>
    </section>

    <section id="contact">
      <h2>Contact</h2>
      <!-- un lien mailto: ou des coordonnées -->

    </section>

  </main>

  <footer>
    <!-- une mention en pied de page -->

  </footer>

</body>
</html>`,

  starterCSS: `/* ── Ma vitrine ── */

body {
  font-family: 'Inter', sans-serif;
  margin: 0;
  background: #0A0E1A;
  color: #F0F4FF;
  line-height: 1.7;
}

header, main, footer {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
}

h1 { font-size: 2rem; margin: 10px 0 4px; }
h2 { font-size: 1.3rem; color: #FF6B35; margin-top: 30px; }
nav a { color: #FF6B35; margin-right: 16px; text-decoration: none; }
footer { font-size: .85rem; opacity: .6; margin-top: 40px; }

.carte {
  background: #1C2333;
  border: 1px solid #1E2D45;
  border-radius: 10px;
  padding: 20px;
}

/* OBJECTIF 3 : fais passer .cartes en display flex ou grid ici
.cartes {

}
*/

/* OBJECTIF 4 : ajoute une media query pour que les cartes
   s'empilent en une colonne sur petit écran (mobile-first :
   commence par la colonne unique ci-dessus, puis élargis ici)
@media (min-width: 768px) {

}
*/
`,

  objectives: [
    { label: 'Navigation avec liens internes', hint: 'Une <code>&lt;nav&gt;</code> contenant au moins 2 liens <code>&lt;a href="#..."&gt;</code>',
      test: html => {
        const navMatch = html.match(/<nav[^>]*>([\s\S]*?)<\/nav>/i);
        if (!navMatch) return false;
        const links = navMatch[1].match(/<a[^>]+href=["']#/gi);
        return !!(links && links.length >= 2);
      } },
    { label: 'Au moins 3 cartes de service', hint: 'Au moins 3 éléments avec la classe <code>carte</code> (ou équivalent) dans <code>#services</code>',
      test: html => {
        const secMatch = html.match(/<section[^>]+id=["']services["'][^>]*>([\s\S]*?)<\/section>/i);
        if (!secMatch) return false;
        const cards = secMatch[1].match(/class=["'][^"']*carte[^"']*["']/gi);
        return !!(cards && cards.length >= 3);
      } },
    { label: 'Mise en page Flexbox ou Grid', hint: 'Le conteneur <code>.cartes</code> utilise <code>display: flex</code> ou <code>display: grid</code>',
      test: (html, css) => /\.cartes\s*\{[^}]*display\s*:\s*(flex|grid)/i.test(css) },
    { label: 'Media query présente', hint: 'Au moins une règle <code>@media</code> dans le CSS',
      test: (html, css) => /@media[^{]+\{/i.test(css) },
    { label: "La mise en page change réellement selon l'écran", hint: 'La media query modifie bien la disposition de <code>.cartes</code> (direction, colonnes, etc.)',
      test: (html, css) => {
        const mediaBlocks = css.match(/@media[^{]*\{([\s\S]*?)\}\s*\}/gi) || [];
        return mediaBlocks.some(block => /\.cartes[\s\S]*?(flex-direction|grid-template-columns|flex-wrap)/i.test(block));
      } },
    { label: 'Section contact et pied de page', hint: 'Une <code>&lt;section id="contact"&gt;</code> et un <code>&lt;footer&gt;</code> non vides',
      test: html => {
        const contact = html.match(/<section[^>]+id=["']contact["'][^>]*>([\s\S]*?)<\/section>/i);
        const foot = html.match(/<footer[^>]*>([\s\S]*?)<\/footer>/i);
        return !!(contact && contact[1].replace(/<[^>]+>/g,'').trim().length > 0 && foot && foot[1].replace(/<[^>]+>/g,'').trim().length > 0);
      } }
  ],

  mockupHTML: css => `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/><style>${css}
.cartes{display:flex;gap:20px;flex-wrap:wrap}
.carte{flex:1;min-width:220px}
@media (max-width:600px){.cartes{flex-direction:column}}
</style></head><body>
<header>
<nav><a href="#services">Services</a><a href="#contact">Contact</a></nav>
<h1>Atelier Vélo Ndar</h1><p>Réparation et entretien de vélos à Saint-Louis</p>
</header>
<main>
<section id="services"><h2>Nos services</h2>
<div class="cartes">
<div class="carte"><h3>Réparation</h3><p>Crevaisons, freins, vitesses.</p></div>
<div class="carte"><h3>Entretien</h3><p>Révision complète du vélo.</p></div>
<div class="carte"><h3>Vente</h3><p>Pièces et accessoires.</p></div>
</div>
</section>
<section id="contact"><h2>Contact</h2><p><a href="mailto:contact@atelier-ndar.example">contact@atelier-ndar.example</a></p></section>
</main>
<footer>© 2026 Atelier Vélo Ndar</footer>
</body></html>`
};
