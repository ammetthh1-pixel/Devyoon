# DevYoon — Plan & Changelog

> Document vivant. Chaque évolution du projet (décision, fonctionnalité ajoutée, contenu produit) doit être ajoutée en bas, dans la section **Journal**, avec une date.

---

## 1. Vision

DevYoon est une plateforme d'apprentissage structurée, en parallèle de [DevKëf](#) (le jeu de projets interactifs déjà lancé). Là où DevKëf fait progresser par niveaux et récompenses immédiates, **DevYoon fait progresser par phases** : chaque phase = un cours complet à assimiler, suivi d'un **projet complet et concret** à livrer avant de passer à la suivante.

Le nom vient du wolof *yoon* (chemin, voie) — chaque parcours est littéralement un chemin à parcourir, étape par étape.

**Double objectif du projet :**
- Servir de parcours personnel structuré (remplace les cours/projets générés en documents IA par un vrai outil réutilisable et suivable)
- Devenir une ressource ouverte à d'autres apprenants sénégalais/francophones

---

## 2. Positionnement face à DevKëf

| | DevKëf | DevYoon |
|---|---|---|
| Format | Niveaux courts, gamifiés, XP immédiat | Phases longues : cours + projet complet |
| Ton | Ludique, jeu | Mélange : structuré/sobre avec quelques repères de progression (XP, jalons) |
| Contenu | Mini-projets guidés, plusieurs langages en parallèle | Deux parcours profonds et indépendants : Web / IA |
| Éditeur | Systématique, intégré partout | Selon le projet (intégré pour le front-end, environnement local pour Python/IA) |

---

## 3. Les deux parcours

L'utilisateur choisit **Web seul**, **IA seul**, ou les deux — progression suivie séparément pour chacun.

### Parcours Web
| Phase | Contenu | Langages / outils | Projet complet de fin de phase |
|---|---|---|---|
| 0 | Comment marche le web (client/serveur, navigateur, DNS...) | — | Quiz/schéma conceptuel |
| 1 | Structure & mise en forme | HTML, CSS | Page personnelle complète |
| 2 | Responsive & mise en page avancée | CSS (Flexbox, Grid) | Site vitrine responsive |
| 3 | Interactivité | JavaScript | Application interactive simple (to-do, quiz...) |
| 4 | Outils pro | Git, terminal, npm | Dépôt Git structuré + déploiement |
| 5 | Framework front | React (ou équivalent) | Application front complète |
| 6 | Back-end & données | Node.js/Express, base de données | API fonctionnelle |
| 7 | Projet final | Full-stack | Application complète déployée |

### Parcours IA (Agents)
| Phase | Contenu | Langages / outils | Projet complet de fin de phase |
|---|---|---|---|
| 0 | Bases de la programmation | Python | Petits scripts (logique, structures de données) |
| 1 | Manipulation de données | Python (fichiers, API, JSON) | Script d'automatisation |
| 2 | Comprendre les LLM | Prompting, API des modèles | Mini-outil piloté par prompt |
| 3 | Function calling & outils | Frameworks d'agents | Agent avec accès à des outils |
| 4 | Mémoire & connaissances | RAG, bases vectorielles | Agent avec mémoire/contexte |
| 5 | Orchestration | Multi-agents, workflows | Agent autonome multi-étapes |
| 6 | Projet final | Agent complet déployé | Agent IA déployé et utilisable |

*(Ce découpage est un point de départ — ajustable au fil de l'avancement réel.)*

---

## 4. Format d'une phase

Chaque phase suit toujours la même structure :
1. **Cours** — document richement mis en forme (dans l'esprit des cours déjà produits pour la fac : blocs définitions, schémas, exemples de code commentés)
2. **Exercices courts** — pour ancrer les notions avant le projet
3. **Projet complet** — cahier des charges clair, à réaliser dans l'éditeur intégré (front-end) ou en local (Python/IA), avec critères de validation
4. **Jalon de fin de phase** — badge + déblocage de la phase suivante (touche de progression empruntée à DevKëf, sans le ton "jeu")

---

## 5. Fonctionnalités

### V1 — MVP (contenu statique)
- [ ] Page d'accueil : présentation des deux parcours, positionnement clair vs DevKëf
- [ ] Page dédiée par parcours (Web / IA) avec les phases affichées
- [ ] Premiers cours rédigés et stylés (au moins Phase 0-1 de chaque parcours)
- [ ] Design system repris/adapté de DevKëf (cohérence de marque)

### V2 — Comptes & suivi
- [ ] Création de compte / connexion
- [ ] Dashboard perso : progression par parcours, phase en cours, badges obtenus
- [ ] Sauvegarde automatique de l'avancement

### V3 — Éditeur & validation
- [ ] Éditeur intégré + console pour les projets front-end (HTML/CSS/JS), avec aperçu en direct
- [ ] Instructions + livrables téléversables pour les projets Python/IA (pas d'exécution live nécessaire)
- [ ] Système de validation de projet (checklist ou auto-vérification simple)

### V4 — Parcours IA complet
- [ ] Contenu complet du parcours IA jusqu'aux agents déployés
- [ ] Ressources spécifiques (accès API modèles, exemples de frameworks d'agents)

### V5 — Ouverture publique
- [ ] Blog / actus
- [ ] Espace communauté (entraide, partage de projets)
- [ ] Mise en avant des meilleurs projets réalisés par les apprenants

---

## 6. Identité visuelle

Repart de la base DevKëf pour une cohérence de famille, avec une déclinaison propre à DevYoon :
- Fond sombre `#0A0E1A`, surfaces `#111827` / `#1C2333`, bordures `#1E2D45`
- Accents : orange `#FF6B35`, vert `#00C896`, violet `#7C3AED` (réutilisables, à moduler pour différencier visuellement Web vs IA — ex. orange dominant pour Web, violet dominant pour IA)
- Typographie : Space Grotesk (titres), Inter (texte courant), Fira Code (code)
- Ton graphique un cran plus sobre que DevKëf : moins "jeu", plus "académie"

---

## 7. Structure technique du site (pages prévues)

```
index.html                 → Accueil, présentation des 2 parcours
parcours-web.html          → Détail du parcours Web, liste des phases
parcours-ia.html           → Détail du parcours IA, liste des phases
phase/[id]/cours.html      → Cours de la phase
phase/[id]/projet.html     → Énoncé + éditeur du projet
dashboard/index.html       → Suivi de progression (V2)
login.html                 → Connexion / inscription (V2)
a-propos.html              → Le projet, le lien avec DevKëf
```

---

## 8bis. État actuel du site (mis à jour à chaque production)

Le site complet est livré sous forme d'un paquet unique, `devyoon.zip`, mis à jour à chaque nouvelle production — pas besoin de recomposer les fichiers un par un.

| Fichier | Statut | Détail |
|---|---|---|
| `index.html` | ✅ Terminé | Page d'accueil complète |
| `parcours-web.html` | ✅ Terminé | 8 phases listées, Phase 00 déverrouillée |
| `parcours-ia.html` | ✅ Terminé | 7 phases listées, Phase 00 déverrouillée |
| `web/phase-00-cours.html` | ✅ Terminé | Cours complet — comment marche le web |
| `web/phase-00-projet.html` | ✅ Terminé | Brief du projet — trajet d'une requête |
| `ia/phase-00-cours.html` | ✅ Terminé | Cours complet — bases de la programmation (Python) |
| `ia/phase-00-projet.html` | ✅ Terminé | Brief du projet — quatre scripts de logique |
| `web/phase-01-cours.html` | ✅ Terminé | Cours complet — structure & mise en forme (HTML/CSS) |
| `web/phase-01-projet.html` | ✅ Terminé | Brief du projet — page personnelle complète |
| `web/editor-web.html` + `phases-config.js` | ✅ Terminé | Éditeur générique unique pour tous les projets Web (piloté par `?phase=`) |
| `ia/editor-ia.html` + `phases-config.js` | ✅ Terminé | Éditeur générique unique pour tous les projets IA (Pyodide, piloté par `?phase=`) |
| `assets/config.js` | 🔧 À compléter par M | Identifiants Supabase (même projet que DevKëf) |
| `assets/auth.js` | ✅ Terminé | Inscription / connexion / session (email + mot de passe) |
| `assets/progress.js` | ✅ Terminé | Sauvegarde de la progression + calcul des badges |
| `login.html` | ✅ Terminé | Connexion / inscription |
| `dashboard.html` | ✅ Terminé | Progression par parcours + badges |
| `style.css` | ✅ Terminé | Design system principal (pages landing) |
| `course.css` | ✅ Terminé | Design system des pages de cours/projet (variantes orange Web / violet IA) |
| Table Supabase `devyoon_progress` | 🔧 À créer par M | Voir schéma en commentaire dans `progress.js` |
| Phases 02 à 07 (Web) | ⏳ À venir | Cours + projet + entrée dans `phases-config.js` |
| Phases 01 à 06 (IA) | ⏳ À venir | Cours + projet + entrée dans `phases-config.js` |
| `login.html` | ⏳ À venir (V2) | Connexion / inscription |
| Dashboard de progression | ⏳ À venir (V2) | Suivi par parcours, badges |
| Éditeur intégré + console | ⏳ À venir (V3) | Pour les projets front-end |

---

## 9. Journal

### 2026-08-31
- Décision du concept : site parallèle à DevKëf, format cours + projet complet par phase
- Nom retenu : **DevYoon**
- Deux parcours indépendants confirmés : Web et IA
- Éditeur intégré : en mélange selon les projets (pas systématique)
- Ambiance : hybride entre gamifié et académique
- Rédaction du plan complet (ce document)
- **Page d'accueil construite** (`index.html` + `style.css`) : header, hero avec visuel du chemin qui se divise en deux (SVG), section "Le principe" (cours → projet → jalon), section "Les parcours" avec les deux cartes Web/IA et leurs phases, bande de positionnement vs DevKëf, CTA final, footer
- Identité visuelle : reprise des tokens DevKëf (fond, typographies) avec orange = Web, violet = IA
- Liens prévus vers `parcours-web.html`, `parcours-ia.html` et `login.html` (pages non encore créées)
- **Pages de parcours construites** (`parcours-web.html`, `parcours-ia.html`) : en-tête dédié par parcours (pastille, titre, compteurs), liste complète des phases en cartes détaillées (cours + projet), Phase 00 marquée "Disponible", les suivantes "Bientôt" avec CTA verrouillé — reflète l'état réel du contenu (seule la Phase 0 de chaque parcours est rédigée pour l'instant)
- **Phase 00 du parcours Web rédigée en entier** : `web/phase-00-cours.html` (client/serveur, DNS, anatomie d'une requête HTTP, timeline des 6 étapes, résumé) et `web/phase-00-projet.html` (brief du projet "le trajet d'une requête", checklist, exemple de formulation, critère de réussite)
- Nouvelle feuille de style `course.css` dédiée aux pages de cours/projet (boîtes de définition, blocs de code, diagrammes, timeline, checklist)
- Lien de la carte Phase 00 sur `parcours-web.html` connecté vers le cours réel
- **Mise en place du paquet unique `devyoon.zip`**, régénéré à chaque nouvelle production pour contenir l'ensemble des fichiers du site à jour
- **Phase 00 du parcours IA rédigée en entier** : `ia/phase-00-cours.html` (variables/types, conditions, boucles, fonctions, listes et dictionnaires, avec diagramme et exemples de code) et `ia/phase-00-projet.html` (brief "quatre scripts de logique" : FizzBuzz, moyenne et mention, mot le plus long, compteur de lettres)
- Variantes violettes ajoutées à `course.css` (`.track-theme-ia`) pour que la même feuille de style serve aux deux parcours
- Liens de la carte Phase 00 sur `parcours-ia.html` connectés vers le cours réel
- **Phase 01 du parcours Web rédigée en entier** : `web/phase-01-cours.html` (squelette HTML, balises sémantiques, modèle de boîte CSS avec diagramme, sélecteurs, typographie et couleurs) et `web/phase-01-projet.html` (brief "ta page personnelle" : sections attendues, contraintes techniques, critère de réussite)
- Carte Phase 01 débloquée sur `parcours-web.html` ; enchaînement Phase 00 → Phase 01 relié en bas de la page projet Phase 00
- **Style validé par M** : couleurs et typographie approuvées. Retravail du design de la page d'accueil prévu par M lui-même, sans urgence
- **Éditeur intégré construit pour le projet Phase 01 Web** (`web/phase-01-editor.html`) : réutilisation directe de l'architecture DevKëf (CodeMirror HTML/CSS, aperçu live en iframe, bouton Maquette avec iframe de référence, validation par 6 objectifs testés en JS, toast, confetti) — version autonome sans compte/XP/Supabase (V1, pas encore de comptes). Le brief de la Phase 01 pointe désormais vers cet éditeur pour coder directement dans le navigateur
- Décision : le projet Phase 00 IA utilisera Pyodide (Python compilé en WebAssembly) pour exécuter du vrai code Python côté navigateur, sans serveur — prochaine étape
- **Éditeur Pyodide construit pour le projet Phase 00 IA** (`ia/phase-00-editor.html`) : 4 scripts en onglets (Fizz/Buzz, moyenne, mot le plus long, compteur de lettres), CodeMirror en mode Python, chargement différé de Pyodide (au premier clic sur "Exécuter"), console de sortie dédiée, validation automatique par script (comparaison de la sortie réelle à un résultat de référence calculé côté JS pour des données fixes), indicateur d'état Python (chargement / prêt)
- Le brief de la Phase 00 IA pointe désormais vers cet éditeur
- **Pause de développement demandée par M pour tester ce qui a été construit** — prochaines étapes (Phase 02 Web, Phase 01 IA) en attente de retour

### 2026-09-02
- **Bug corrigé par M** dans les deux éditeurs (`web/phase-01-editor.html` ligne ~298, `ia/phase-00-editor.html` ligne ~415) : une apostrophe mal échappée (`\\'` au lieu de guillemets doubles) cassait le JavaScript. Correction de M vérifiée et adoptée dans les deux fichiers

### 2026-09-02 (suite) — Comptes, progression, badges

- Décisions actées : pas de classement ni de points/XP ; un compte pour sauvegarder la progression + un dashboard ; badges par projet terminé, par parcours complet, et un badge "polyvalent" (Web + IA)
- Backend : même projet Supabase que DevKëf (comptes partagés), authentification par email + mot de passe. Domaines séparés (`*.pages.dev` sur Cloudflare Pages pour les deux sites) → pas de session automatiquement partagée entre les deux sites, mais mêmes identifiants de compte
- **Éditeurs fusionnés en deux fichiers uniques**, sur le modèle DevKëf : `web/editor-web.html` (piloté par `?phase=`) et `ia/editor-ia.html` (piloté par `?phase=`), chacun lisant sa configuration depuis `web/phases-config.js` / `ia/phases-config.js`. Les anciens fichiers `phase-01-editor.html` et `phase-00-editor.html` sont supprimés — ajouter un projet ne demande plus qu'une entrée de config, plus aucun fichier à dupliquer
- **Backend front-end construit** : `assets/config.js` (identifiants Supabase, à compléter par M), `assets/auth.js` (inscription/connexion/session), `assets/progress.js` (sauvegarde de la progression + calcul des badges), `login.html`, `dashboard.html` (progression par parcours + badges, chips par phase)
- Les éditeurs sauvegardent automatiquement la progression sur Supabase quand un projet est validé à 100% *si* l'utilisateur est connecté ; sinon, un message invite à se connecter pour sauvegarder
- Navigation : le lien "Se connecter" de l'accueil et des pages parcours se transforme en "Mon tableau de bord" quand une session est active
- **Reste à faire côté M (Supabase)** : coller l'URL + la clé anon du projet dans `assets/config.js` ; créer la table `devyoon_progress` (schéma en commentaire dans `progress.js`) avec RLS (`user_id = auth.uid()`) ; ajouter l'URL DevYoon dans Authentication → URL Configuration → Redirect URLs
