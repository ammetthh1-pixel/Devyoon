/* ══════════════════════════════════════════════
   DEVYOON — Projet IA · Phase 01
   Fichier isolé : ne contient QUE la config de cette
   phase. Chargé uniquement quand ?phase=01.
══════════════════════════════════════════════ */

window.PROJECT_CONFIG = {
  title: "Trois scripts de données",
  briefFile: "phase-01-projet.html",
  coursFile: "phase-01-cours.html",

  scripts: [
    {
      id: 'villes',
      label: '1. Villes',
      title: 'Villes et population',
      hint: "Charge le JSON avec json.loads(), calcule la population totale et trouve la ville la plus peuplée.",
      starter: `import json

donnees_brutes = '''
[
  {"ville": "Dakar", "population": 1146053},
  {"ville": "Thiès", "population": 320000},
  {"ville": "Saint-Louis", "population": 176000},
  {"ville": "Ziguinchor", "population": 205000}
]
'''

villes = json.loads(donnees_brutes)

total = 0
# TODO : calcule la population totale (somme de "population" pour chaque ville)

plus_peuplee = ""
# TODO : trouve le nom de la ville avec la plus grande population

print("Population totale :", total)
print("Ville la plus peuplée :", plus_peuplee)
`,
      validate: output => {
        const villes = [
          { ville: "Dakar", population: 1146053 },
          { ville: "Thiès", population: 320000 },
          { ville: "Saint-Louis", population: 176000 },
          { ville: "Ziguinchor", population: 205000 }
        ];
        const total = villes.reduce((s, v) => s + v.population, 0);
        const maxVille = villes.reduce((a, b) => b.population > a.population ? b : a).ville;
        const numMatch = output.match(/\d[\d\s]*\d|\d/g);
        const hasTotal = numMatch && numMatch.map(n => parseInt(n.replace(/\s/g, ''), 10)).includes(total);
        const hasVille = output.includes(maxVille);
        if (!hasTotal) return { ok: false, msg: `La population totale attendue est ${total} — je ne la retrouve pas dans ta sortie.` };
        if (!hasVille) return { ok: false, msg: `La ville la plus peuplée attendue est "${maxVille}" — je ne la retrouve pas dans ta sortie.` };
        return { ok: true, msg: `Total ${total} et "${maxVille}" bien trouvés. ✓` };
      }
    },
    {
      id: 'notes_fichier',
      label: '2. Fichier de notes',
      title: 'Fichier de notes',
      hint: "Écris les notes dans un fichier avec open(..., 'w'), puis relis-le pour calculer la moyenne.",
      starter: `notes = {"Awa": 16, "Moussa": 9, "Fatou": 14}

# TODO : écris chaque "nom: note" sur une ligne dans "notes.txt"
# avec  with open("notes.txt", "w") as f: ...
with open("notes.txt", "w") as f:
    pass

# TODO : relis "notes.txt" et calcule la moyenne des notes lues
total = 0
compte = 0
with open("notes.txt") as f:
    pass

moyenne = total / compte if compte else 0
print("Moyenne calculée :", moyenne)
`,
      validate: output => {
        const notes = { Awa: 16, Moussa: 9, Fatou: 14 };
        const values = Object.values(notes);
        const expectedAvg = values.reduce((a, b) => a + b, 0) / values.length;
        const numMatch = output.match(/-?\d+(\.\d+)?/g);
        const foundAvg = numMatch ? numMatch.map(Number).find(n => Math.abs(n - expectedAvg) < 0.05) : undefined;
        if (foundAvg === undefined) return { ok: false, msg: `La moyenne attendue est ${expectedAvg} — je ne la retrouve pas dans ta sortie.` };
        return { ok: true, msg: `Moyenne ${expectedAvg} bien trouvée. ✓` };
      }
    },
    {
      id: 'filtrage',
      label: '3. Filtrage',
      title: "Filtrage d'employés",
      hint: "Filtre la liste pour ne garder que les employés actifs, puis affiche leur nombre et leurs noms.",
      starter: `employes = [
    {"nom": "Awa", "actif": True},
    {"nom": "Moussa", "actif": False},
    {"nom": "Fatou", "actif": True},
    {"nom": "Ali", "actif": True}
]

actifs = []
# TODO : remplis "actifs" avec les employés dont "actif" est True

print("Nombre d'actifs :", len(actifs))
# TODO : affiche le nom de chaque employé actif
`,
      validate: output => {
        const expectedNames = ["Awa", "Fatou", "Ali"];
        const hasCount = /\b3\b/.test(output);
        const missingNames = expectedNames.filter(n => !output.includes(n));
        if (!hasCount) return { ok: false, msg: "Le nombre d'actifs attendu est 3 — je ne le retrouve pas dans ta sortie." };
        if (missingNames.length) return { ok: false, msg: `Nom(s) manquant(s) dans la sortie : ${missingNames.join(', ')}` };
        return { ok: true, msg: 'Les 3 employés actifs sont bien listés. ✓' };
      }
    }
  ]
};
