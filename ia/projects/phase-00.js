/* ══════════════════════════════════════════════
   DEVYOON — Projet IA · Phase 00
   Fichier isolé : ne contient QUE la config de cette
   phase. Chargé uniquement quand ?phase=00.
══════════════════════════════════════════════ */

window.PROJECT_CONFIG = {
  title: "Quatre scripts de logique",
  briefFile: "phase-00-projet.html",
  coursFile: "phase-00-cours.html",

  scripts: [
    {
      id: 'fizzbuzz',
      label: '1. Fizz / Buzz',
      title: 'Pair, impair ou multiple de 3',
      hint: 'Pour chaque nombre de 1 à 50 : "Fizz" si multiple de 3, sinon "Buzz" si pair, sinon le nombre.',
      starter: `# Pour chaque nombre de 1 à 50 :
# - s'il est multiple de 3 -> affiche "Fizz"
# - sinon, s'il est pair   -> affiche "Buzz"
# - sinon                  -> affiche le nombre

for n in range(1, 51):
    pass  # TODO : remplace par ta logique
`,
      validate: output => {
        const expected = [];
        for (let n = 1; n <= 50; n++) {
          if (n % 3 === 0) expected.push('Fizz');
          else if (n % 2 === 0) expected.push('Buzz');
          else expected.push(String(n));
        }
        const actual = output.split('\n').map(l => l.trim()).filter(l => l.length > 0);
        if (actual.length !== expected.length) return { ok: false, msg: `Tu affiches ${actual.length} lignes, on en attend ${expected.length}.` };
        for (let i = 0; i < expected.length; i++) {
          if (actual[i] !== expected[i]) return { ok: false, msg: `Ligne ${i+1} : attendu "${expected[i]}", reçu "${actual[i]}".` };
        }
        return { ok: true, msg: 'Les 50 lignes correspondent exactement. ✓' };
      }
    },
    {
      id: 'moyenne',
      label: '2. Moyenne',
      title: 'Moyenne et mention',
      hint: 'Calcule la moyenne de "notes" avec une fonction, puis affiche la mention correspondante.',
      starter: `notes = [12, 8, 15, 19, 6]

def moyenne(liste):
    pass  # TODO : retourne la moyenne de la liste

m = moyenne(notes)

# TODO : affiche la moyenne, puis la mention
# < 10 -> "Insuffisant" | 10-15 -> "Admis" | > 15 -> "Très bien"
print("Moyenne calculée :", m)
`,
      validate: output => {
        const notes = [12, 8, 15, 19, 6];
        const expectedAvg = notes.reduce((a,b)=>a+b,0) / notes.length;
        const expectedMention = expectedAvg < 10 ? 'Insuffisant' : expectedAvg <= 15 ? 'Admis' : 'Très bien';
        const numMatch = output.match(/-?\d+(\.\d+)?/g);
        const foundAvg = numMatch ? numMatch.map(Number).find(n => Math.abs(n - expectedAvg) < 0.05) : undefined;
        const hasMention = output.toLowerCase().includes(expectedMention.toLowerCase());
        if (foundAvg === undefined) return { ok: false, msg: `La moyenne attendue est ${expectedAvg} — je ne la retrouve pas dans ta sortie.` };
        if (!hasMention) return { ok: false, msg: `La mention attendue est "${expectedMention}" — je ne la retrouve pas dans ta sortie.` };
        return { ok: true, msg: `Moyenne ${expectedAvg} et mention "${expectedMention}" bien trouvées. ✓` };
      }
    },
    {
      id: 'motlong',
      label: '3. Mot le plus long',
      title: 'Le mot le plus long',
      hint: 'Trouve le mot le plus long dans "mots", à la main avec une boucle.',
      starter: `mots = ["chat", "ordinateur", "clé", "programmation", "soleil"]

plus_long = ""
# TODO : parcours "mots" avec une boucle et garde le plus long dans plus_long

print("Le mot le plus long est :", plus_long)
`,
      validate: output => {
        const expected = 'programmation';
        const ok = output.toLowerCase().includes(expected);
        return ok
          ? { ok: true, msg: `"${expected}" trouvé dans la sortie. ✓` }
          : { ok: false, msg: `Le mot attendu est "${expected}" — je ne le retrouve pas dans ta sortie.` };
      }
    },
    {
      id: 'compteur',
      label: '4. Compteur de lettres',
      title: 'Compteur de lettres',
      hint: 'Compte les occurrences de chaque lettre de "mot" dans un dictionnaire, puis affiche-le avec print().',
      starter: `mot = "anniversaire"

compteur = {}
# TODO : parcours chaque lettre de "mot" et compte les occurrences dans compteur

print(compteur)
`,
      validate: output => {
        const reference = {};
        for (const ch of 'anniversaire') reference[ch] = (reference[ch] || 0) + 1;
        const pairs = [...output.matchAll(/['"]?([a-zA-Zàâäéèêëîïôöùûüç])['"]?\s*:\s*(\d+)/g)];
        if (pairs.length === 0) return { ok: false, msg: 'Je ne trouve pas de dictionnaire du type {"a": 2, ...} dans ta sortie — termine bien par print(compteur).' };
        const found = {};
        pairs.forEach(([, k, v]) => found[k.toLowerCase()] = parseInt(v, 10));
        const keys = Object.keys(reference);
        const missing = keys.filter(k => found[k] === undefined);
        const wrong = keys.filter(k => found[k] !== undefined && found[k] !== reference[k]);
        if (missing.length) return { ok: false, msg: `Lettre(s) manquante(s) dans ton dictionnaire : ${missing.join(', ')}` };
        if (wrong.length) return { ok: false, msg: `Comptage incorrect pour : ${wrong.join(', ')}` };
        return { ok: true, msg: 'Toutes les lettres sont correctement comptées. ✓' };
      }
    }
  ]
};
