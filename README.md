# LabAccess

Système de gestion et de contrôle d'accès pour laboratoire informatique universitaire.

## Description

LabAccess est une plateforme de gestion d'accès pour les laboratoires informatiques universitaires. Elle permet de contrôler les entrées et sorties des étudiants et professeurs en utilisant des cartes avec QR Code, de gérer l'attribution des postes informatiques, et de suivre l'historique des sessions.

Le système est conçu pour être utilisé par des agents de sécurité lors des opérations quotidiennes de contrôle d'accès, tout en offrant aux administrateurs une interface complète de gestion.

## Objectifs

- Contrôler l'accès aux laboratoires informatiques via QR Code
- Gérer les sessions d'entrée/sortie des étudiants et professeurs
- Attribuer et suivre l'utilisation des postes informatiques
- Gérer les réservations de salles par les professeurs
- Maintenir un historique complet des accès
- Fournir des statistiques et rapports d'utilisation

## Fonctionnalités

### Gestion des Accès
- Scan de QR Code pour identification
- Vérification du statut des cartes
- Création automatique de sessions
- Détection automatique des sorties (deuxième scan)
- Gestion des cartes actives, inactives et bloquées

### Gestion des Postes
- Attribution de postes informatiques
- Option PC privé (ordinateur personnel)
- Suivi de l'état des postes (disponible, occupé, maintenance, hors service)
- Libération automatique des postes

### Gestion des Professeurs
- Workflow spécifique pour les professeurs
- Réservation de laboratoires
- Réservation d'auditoires
- Vérification des conflits de réservation

### Administration
- Gestion des étudiants, professeurs et agents
- Gestion des facultés et promotions
- Gestion des cartes et QR Codes
- Gestion des salles et ordinateurs
- Paramètres du système

### Reporting
- Dashboard avec statistiques en temps réel
- Historique des sessions
- Rapports d'utilisation
- Filtres et exports

## Utilisateurs

### Administrateur
- Gestion complète de tous les utilisateurs et ressources
- Configuration du système
- Accès à tous les rapports et statistiques

### Agent
- Scan des cartes et contrôle d'accès
- Attribution des postes
- Consultation des personnes présentes
- Consultation des sessions actives
- Consultation de l'historique

### Étudiant
- Utilisateur final du système
- Présente sa carte pour l'accès
- Utilise un poste du laboratoire ou son PC personnel

### Professeur
- Accès au laboratoire
- Possibilité de réserver des salles
- Possibilité de réserver des auditoires

## Fonctionnement

### Scénario d'Entrée

1. L'étudiant ou professeur présente sa carte à l'agent
2. L'agent scanne le QR Code de la carte
3. Le système identifie la personne
4. Le système vérifie le statut de la carte
5. Le système détermine le type (étudiant ou professeur)
6. Le système crée une session
7. L'agent attribue un ordinateur (ou sélectionne PC privé)
8. La personne entre dans le laboratoire

### Scénario de Sortie

1. La personne revient auprès de l'agent
2. L'agent reprend la carte
3. L'agent scanne une deuxième fois le QR Code
4. Le système retrouve la session active
5. Le système enregistre l'heure de sortie
6. La session est terminée
7. Le PC attribué redevient disponible
8. L'agent rend la carte à la personne
9. La personne quitte le laboratoire

### Attribution des PC

Lors de l'entrée, l'agent peut choisir :
- **PC du laboratoire** : Sélection d'un poste spécifique parmi ceux disponibles
- **PC privé** : La personne utilise son propre ordinateur, aucun poste du laboratoire n'est occupé

### Fonctionnement Professeur

Lorsqu'un professeur est identifié, le système propose :
- **Option A** : Travailler sur un ordinateur du laboratoire
- **Option B** : Réserver le laboratoire
- **Option C** : Réserver un auditoire

Les réservations prennent en compte : salle, date, heure de début, heure de fin, motif, professeur, statut.

### Réservations

Le système empêche les conflits de réservation pour une même salle. Les réservations sont visibles par les agents et administrateurs.

## Architecture

L'architecture du projet est décrite en détail dans [docs/architecture.md](docs/architecture.md).

### Frontend
- HTML5, CSS3, JavaScript
- Design system défini dans [docs/design-system.md](docs/design-system.md)
- Module scanner QR avec abstraction pour caméra et USB

### Backend
- Framework à déterminer (Node.js/Express, Python/Flask, Java/Spring Boot)
- Architecture REST
- Middleware d'authentification et autorisation

### Base de Données
- SGBD à déterminer (PostgreSQL recommandé)
- Structure définie dans [docs/database.md](docs/database.md)
- Migrations et seeds préparées

### Scanner
- Abstraction pour intégration de :
  - Caméra (WebRTC)
  - Scanner QR USB
  - Autres périphériques compatibles

## Structure du Projet

```
labo_ai/
├── .github/                  # Configuration GitHub
│   ├── ISSUE_TEMPLATE/       # Templates d'Issues
│   └── pull_request_template.md
├── docs/                     # Documentation complète
│   ├── cahier-des-charges.md
│   ├── besoins.md
│   ├── use-cases.md
│   ├── architecture.md
│   ├── database.md
│   ├── design-system.md
│   ├── business-rules.md
│   ├── workflows.md
│   ├── roadmap.md
│   ├── testing-strategy.md
│   └── github-issues.md
├── frontend/                 # Application frontend
│   ├── assets/
│   │   ├── css/
│   │   │   ├── main.css              # Styles globaux (design system)
│   │   │   └── components/
│   │   ├── js/
│   │   │   ├── main.js               # Point d'entrée
│   │   │   ├── api/                  # Appels API
│   │   │   ├── components/           # Composants réutilisables
│   │   │   ├── pages/                # Logique des pages
│   │   │   ├── scanner/              # Module scanner QR
│   │   │   │   ├── scanner.js        # Interface abstraite
│   │   │   │   ├── camera.js         # Implémentation caméra
│   │   │   │   ├── usb.js            # Implémentation USB
│   │   │   │   ├── validator.js      # Validation QR
│   │   │   │   └── workflow.js       # Workflow de scan
│   │   │   └── utils/                # Utilitaires
│   │   └── images/
│   ├── pages/
│   │   ├── auth/
│   │   │   └── login.html
│   │   ├── agent/                    # Pages agents
│   │   │   ├── dashboard.html
│   │   │   ├── scanner.html
│   │   │   ├── session.html
│   │   │   ├── people.html
│   │   │   ├── computers.html
│   │   │   ├── history.html
│   │   │   └── reservations.html
│   │   └── admin/                    # Pages administrateurs
│   │       ├── dashboard.html
│   │       ├── students.html
│   │       ├── professors.html
│   │       ├── agents.html
│   │       ├── faculties.html
│   │       ├── promotions.html
│   │       ├── cards.html
│   │       ├── computers.html
│   │       ├── rooms.html
│   │       ├── reservations.html
│   │       ├── sessions.html
│   │       ├── history.html
│   │       └── settings.html
│   ├── index.html
│   └── README.md
├── backend/                  # Application backend
│   ├── config/               # Configuration
│   │   └── database.js       # Configuration base de données
│   ├── controllers/          # Contrôleurs API
│   │   └── authController.js # Contrôleur authentification
│   ├── models/               # Modèles de données
│   │   └── User.js           # Modèle utilisateur
│   ├── routes/               # Routes API
│   │   └── auth.js           # Routes authentification
│   ├── services/             # Logique métier
│   ├── middleware/           # Middleware
│   ├── utils/                # Utilitaires
│   └── tests/                # Tests backend
├── db/                       # Base de données
│   ├── migrations/           # Scripts de migration
│   │   └── 001_initial_schema.sql  # Schéma initial
│   ├── seeds/                # Données de test
│   ├── schemas/              # Schémas de référence
│   └── README.md
├── README.md                 # Documentation principale
└── .gitignore
```

## MVP exécutable

Le projet inclut maintenant une version MVP autonome, utilisable sans installer de dépendance tierce ni configurer PostgreSQL. Elle couvre :

- authentification administrateur et agent ;
- gestion des étudiants, professeurs et cartes QR ;
- contrôle d’accès (entrée, sortie au second scan, poste de laboratoire ou PC personnel) ;
- suivi de l’état des postes et libération automatique ;
- réservations avec détection des conflits ;
- tableau de bord et historique des sessions.

### Démarrer l’application

```bash
node backend/server.js
```

Ouvrir ensuite `http://localhost:3000`.

Comptes de démonstration :

| Rôle | E-mail | Mot de passe |
| --- | --- | --- |
| Administrateur | `admin@labaccess.local` | `admin123` |
| Agent de sécurité | `agent@labaccess.local` | `agent123` |

Les données de démonstration sont enregistrées localement dans `backend/data/labaccess.json` à la première exécution. Supprimer ce fichier réinitialise la démonstration.

### Vérifications

```bash
node --test backend/tests/api.test.js
```

## Installation

### Prérequis

- Node.js (si choix Node.js) ou Python (si choix Python) ou Java (si choix Java)
- PostgreSQL (recommandé) ou MySQL
- Git

### Étapes d'installation

1. Cloner le dépôt
```bash
git clone https://github.com/votre-username/labaccess.git
cd labaccess
```

2. Configurer la base de données
```bash
# Créer la base de données
psql -U postgres -c "CREATE DATABASE labaccess;"

# Exécuter les migrations
psql -U postgres -d labaccess -f db/migrations/001_initial_schema.sql
```

3. Configurer les variables d'environnement
```bash
# Créer un fichier .env
cp .env.example .env
# Éditer .env avec vos configurations
```

4. Installer les dépendances (selon le choix de technologie)
```bash
# Pour Node.js
npm install

# Pour Python
pip install -r requirements.txt

# Pour Java
mvn install
```

5. Démarrer l'application
```bash
# Pour Node.js
npm start

# Pour Python
python app.py

# Pour Java
mvn spring-boot:run
```

## Développement

### Frontend

Le frontend utilise HTML5, CSS3 et JavaScript vanilla. Le design system est défini dans `frontend/assets/css/main.css`.

Pour commencer le développement frontend :
1. Ouvrir `frontend/pages/auth/login.html` dans un navigateur
2. Suivre le design system dans `docs/design-system.md`
3. Utiliser les composants dans `frontend/assets/js/components/`

### Backend

Le backend utilise une architecture REST avec des contrôleurs, modèles et services.

Pour commencer le développement backend :
1. Choisir la technologie (Node.js, Python, Java)
2. Compléter les modèles dans `backend/models/`
3. Compléter les contrôleurs dans `backend/controllers/`
4. Définir les routes dans `backend/routes/`

### Module Scanner

Le module scanner est abstrait pour supporter différents périphériques :
- Caméra via WebRTC
- Scanner USB via événements clavier

Voir `frontend/assets/js/scanner/README.md` pour plus de détails.

## Technologies Prévues

### Frontend
- HTML5
- CSS3
- JavaScript (ES6+)

### Backend (à déterminer)
- Possibilités : Node.js, PHP, Python, Java, etc.

### Base de Données (à déterminer)
- Possibilités : PostgreSQL, MySQL, MongoDB, etc.

### QR Code
- Génération d'identifiants uniques
- Validation côtéServeur
- Scanner via périphérique compatible

## Documentation

- [Cahier des charges](docs/cahier-des-charges.md) - Spécifications détaillées du projet
- [Besoins](docs/besoins.md) - Analyse des besoins utilisateurs
- [Use Cases](docs/use-cases.md) - Cas d'utilisation détaillés
- [Architecture](docs/architecture.md) - Architecture technique du système
- [Base de données](docs/database.md) - Structure de la base de données
- [Design System](docs/design-system.md) - Règles de design et UI
- [Règles métier](docs/business-rules.md) - Règles métier complètes
- [Workflows](docs/workflows.md) - Diagrammes de workflow
- [Roadmap](docs/roadmap.md) - Roadmap de développement
- [Stratégie de tests](docs/testing-strategy.md) - Stratégie de tests

## Workflow Git

### Branches

```
main          → Branche de production
develop       → Branche de développement
feature/*     → Nouvelles fonctionnalités
fix/*         → Corrections de bugs
docs/*        → Documentation
```

### Processus

1. Créer une Issue GitHub pour la tâche
2. Créer une branche depuis `develop`
3. Développer la fonctionnalité
4. Tester
5. Commit avec convention de commits
6. Push vers GitHub
7. Créer une Pull Request
8. Review et merge

### Convention de Commits

```
feat:     Nouvelle fonctionnalité
fix:      Correction de bug
docs:     Documentation
refactor: Refactorisation
test:     Tests
chore:    Tâche technique
```

Exemple : `feat: add qr scanner interface`

## Issues

Chaque fonctionnalité sera développée à partir d'une Issue GitHub. Les Issues sont organisées par phases et milestones.

Voir la section [GitHub Issues](#github-issues) pour plus de détails.

## Pull Requests

### Règles

- Titre clair et descriptif
- Description détaillée des changements
- Référence à l'Issue associée
- Tests réalisés
- Code review obligatoire
- Approval avant merge

### Template

Utiliser le template `.github/pull_request_template.md`

## Contribution

Pour contribuer au projet :

1. Consulter la [roadmap](docs/roadmap.md)
2. Choisir une Issue disponible ou en proposer une nouvelle
3. Assigner l'Issue à soi-même
4. Créer une branche depuis `develop`
5. Développer selon les spécifications
6. Tester selon la [stratégie de tests](docs/testing-strategy.md)
7. Ouvrir une Pull Request
8. Attendre le review et le merge

## GitHub Issues

Le projet est organisé en **15 Issues** principales regroupées par modules. Voir [docs/github-issues.md](docs/github-issues.md) pour le détail complet.

### Liste des Issues

1. **Initialisation et Configuration du Projet** - Dépôt Git, documentation, templates
2. **Authentification et Gestion des Utilisateurs** - Login, rôles, permissions
3. **Gestion des Personnes** - Étudiants, professeurs, agents, facultés, promotions
4. **Gestion des Cartes et QR Code** - CRUD cartes, génération QR, validation
5. **Scanner QR Code et Identification** - Interface scanner, intégration backend
6. **Gestion des Sessions** - Création, détection, terminaison, calcul durée
7. **Gestion des Salles et Ordinateurs** - CRUD, états, attribution, libération
8. **Workflow Professeur et Réservations** - Options professeur, réservations
9. **Dashboards** - Dashboard agent et administrateur, statistiques
10. **Historique et Rapports** - Historique sessions, filtres, rapports
11. **Tests Complets** - Tests unitaires, intégration, E2E, performance
12. **Responsive Design et Accessibilité** - Mobile/tablette/desktop, WCAG AA
13. **Gestion des Erreurs et Notifications** - Messages d'erreur, notifications
14. **Optimisation des Performances** - Requêtes, cache, frontend, pagination
15. **Documentation Finale et Release** - Documentation utilisateur, guide déploiement

Chaque Issue suit le template défini dans `.github/ISSUE_TEMPLATE/task.md`.

## Labels

- `feature` - Nouvelle fonctionnalité
- `bug` - Bug à corriger
- `documentation` - Documentation
- `design` - Design/UI
- `frontend` - Frontend
- `backend` - Backend
- `database` - Base de données
- `security` - Sécurité
- `testing` - Tests
- `refactor` - Refactorisation
- `enhancement` - Amélioration
- `good-first-issue` - Bon pour commencer
- `priority-high` - Priorité haute
- `priority-medium` - Priorité moyenne
- `priority-low` - Priorité basse

## Milestones

Les milestones sont organisées pour suivre le développement du projet :

- **Milestone 1 : Fondation** (Issues #1-#3) - Initialisation, authentification, gestion des personnes
- **Milestone 2 : Accès QR** (Issues #4-#6) - Cartes, scanner, sessions
- **Milestone 3 : Ressources** (Issues #7-#8) - Salles/ordinateurs, réservations
- **Milestone 4 : Interface** (Issues #9-#10) - Dashboards, historique
- **Milestone 5 : Qualité** (Issues #11-#14) - Tests, responsive, erreurs, performance
- **Milestone 6 : Release 1.0** (Issue #15) - Documentation finale et release

## Sécurité

Les exigences de sécurité sont détaillées dans [docs/architecture.md](docs/architecture.md#sécurité).

Points clés :
- Authentification et autorisation
- Protection des données personnelles
- Validation des QR Codes
- Contrôle des sessions multiples
- Logs et audit trail

## License

À définir

## Contact

À définir

---

**Projet préparé pour développement collaboratif sur GitHub.**
