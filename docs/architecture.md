# Architecture Technique - LabAccess

## 1. Vue d'Ensemble

LabAccess est une application web de gestion et de contrôle d'accès pour laboratoire informatique universitaire. L'architecture est conçue pour être modulaire, évolutive et maintenable.

### 1.1 Principes Architecturaux

- **Séparation des responsabilités :** Frontend, Backend, Base de données
- **Modularité :** Chaque module est indépendant et réutilisable
- **Scalabilité :** L'architecture permet l'évolution du système
- **Maintenabilité :** Code organisé et documenté
- **Sécurité :** Protection des données et des accès

## 2. Architecture Globale

```
┌─────────────────────────────────────────────────────────────┐
│                         CLIENT                               │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                    FRONTEND                            │  │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐             │  │
│  │  │  HTML    │  │   CSS    │  │JavaScript│             │  │
│  │  └──────────┘  └──────────┘  └──────────┘             │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              │
                              │ HTTP/HTTPS
                              │
┌─────────────────────────────────────────────────────────────┐
│                         SERVER                               │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                    BACKEND                             │  │
│  │                                                       │  │
│  │  ┌─────────────────────────────────────────────┐     │  │
│  │  │              API RESTful                    │     │  │
│  │  └─────────────────────────────────────────────┘     │  │
│  │                                                       │  │
│  │  ┌──────────────┐  ┌──────────────┐  ┌────────────┐ │  │
│  │  │ Auth Module  │  │  QR Module   │  │Session Mod │ │  │
│  │  └──────────────┘  └──────────────┘  └────────────┘ │  │
│  │  ┌──────────────┐  ┌──────────────┐  ┌────────────┐ │  │
│  │  │ User Module  │  │ Computer Mod │  │Reservation │ │  │
│  │  └──────────────┘  └──────────────┘  └────────────┘ │  │
│  │  ┌──────────────┐  ┌──────────────┐  ┌────────────┐ │  │
│  │  │ Card Module  │  │  Room Module │  │Report Mod  │ │  │
│  │  └──────────────┘  └──────────────┘  └────────────┘ │  │
│  └───────────────────────────────────────────────────────┘  │
│                              │                               │
│                              │                               │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                 BASE DE DONNÉES                        │  │
│  │              (SGBD à déterminer)                       │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              │
                              │
┌─────────────────────────────────────────────────────────────┐
│                    PÉRIPHÉRIQUES                            │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                  │
│  │ Caméra   │  │Scanner QR│  │  Autre   │                  │
│  └──────────┘  └──────────┘  └──────────┘                  │
└─────────────────────────────────────────────────────────────┘
```

## 3. Frontend

### 3.1 Technologies

- **HTML5** : Structure des pages
- **CSS3** : Style et mise en page
- **JavaScript (ES6+)** : Logique côté client

### 3.2 Architecture Frontend

```
frontend/
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   └── components/
│   ├── js/
│   │   ├── main.js
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   └── utils/
│   └── images/
├── pages/
│   ├── auth/
│   │   └── login.html
│   ├── agent/
│   │   ├── dashboard.html
│   │   ├── scanner.html
│   │   ├── session.html
│   │   ├── people.html
│   │   ├── computers.html
│   │   ├── history.html
│   │   └── reservations.html
│   └── admin/
│       ├── dashboard.html
│       ├── students.html
│       ├── professors.html
│       ├── agents.html
│       ├── faculties.html
│       ├── promotions.html
│       ├── cards.html
│       ├── computers.html
│       ├── rooms.html
│       ├── reservations.html
│       ├── sessions.html
│       ├── history.html
│       └── settings.html
└── index.html
```

### 3.3 Modules Frontend

#### API Module
- Communication avec le backend
- Gestion des requêtes HTTP
- Gestion des erreurs

#### Components Module
- Composants réutilisables
- Boutons, formulaires, tableaux, modales, etc.

#### Pages Module
- Logique spécifique à chaque page
- Gestion des événements
- Mise à jour de l'interface

#### Utils Module
- Fonctions utilitaires
- Validation
- Formatage

### 3.4 Design System

Voir [design-system.md](design-system.md) pour le détail complet.

## 4. Backend

### 4.1 Framework Backend (À Déterminer)

Le framework backend sera choisi ultérieurement. Options possibles :

- **Node.js (Express/NestJS)**
- **PHP (Laravel/Symfony)**
- **Python (Django/Flask)**
- **Java (Spring Boot)**
- **C# (.NET Core)**

### 4.2 Architecture Backend

```
backend/
├── config/
├── controllers/
├── models/
├── routes/
├── services/
├── middleware/
├── utils/
└── tests/
```

### 4.3 Modules Backend

#### Auth Module
- Gestion de l'authentification
- Gestion des sessions
- Gestion des rôles et permissions

#### User Module
- Gestion des utilisateurs (étudiants, professeurs, agents)
- CRUD sur les utilisateurs
- Recherche et filtrage

#### Card Module
- Gestion des cartes
- Génération des identifiants QR
- Validation des QR Codes

#### QR Module
- Abstraction pour le scan QR
- Intégration avec les périphériques
- Validation des QR Codes scannés

#### Session Module
- Gestion des sessions d'entrée/sortie
- Création et terminaison des sessions
- Calcul de la durée

#### Computer Module
- Gestion des ordinateurs
- Gestion des états
- Attribution et libération

#### Room Module
- Gestion des salles
- Gestion des types (laboratoire, auditoire)

#### Reservation Module
- Gestion des réservations
- Vérification des conflits
- États des réservations

#### Report Module
- Génération des rapports
- Statistiques
- Export des données

### 4.4 API RESTful

L'API suivra les principes REST :

- **GET** : Récupérer des ressources
- **POST** : Créer des ressources
- **PUT/PATCH** : Mettre à jour des ressources
- **DELETE** : Supprimer des ressources

#### Exemples d'Endpoints

```
POST   /api/auth/login
GET    /api/students
POST   /api/students
GET    /api/students/:id
PUT    /api/students/:id
DELETE /api/students/:id

POST   /api/qr/scan
GET    /api/sessions
POST   /api/sessions
GET    /api/sessions/:id
PUT    /api/sessions/:id

GET    /api/computers
POST   /api/computers
GET    /api/computers/:id
PUT    /api/computers/:id

GET    /api/reservations
POST   /api/reservations
GET    /api/reservations/:id
PUT    /api/reservations/:id
```

## 5. Base de Données

### 5.1 SGBD (À Déterminer)

Le SGBD sera choisi ultérieurement. Options possibles :

- **PostgreSQL** : Relationnel, robuste, open source
- **MySQL** : Relationnel, populaire, open source
- **MongoDB** : NoSQL, flexible, scalable
- **SQLite** : Relationnel, léger, embedded

### 5.2 Structure de la Base de Données

Voir [database.md](database.md) pour le détail complet.

### 5.3 Entités Principales

- users
- students
- professors
- agents
- faculties
- promotions
- cards
- rooms
- computers
- sessions
- computer_assignments
- reservations
- access_logs

## 6. Module Scanner QR

### 6.1 Abstraction

Le module scanner fournira une abstraction pour s'intégrer avec différents périphériques :

```javascript
interface QRScanner {
  scan(): Promise<string>;
  stop(): void;
}
```

### 6.2 Implémentations Possibles

#### Caméra
- Utilisation de l'API WebRTC
- Capture vidéo
- Détection QR Code

#### Scanner QR USB
- Intégration avec les drivers
- Lecture des données entrantes
- Conversion en texte

#### Autre Périphérique
- Extensibilité pour d'autres types de scanners

### 6.3 Workflow du Scan

```
DÉMARRAGE DU SCANNER
       ↓
ATTENTE DE SCAN
       ↓
QR CODE DÉTECTÉ
       ↓
LECTURE DE L'IDENTIFIANT
       ↓
VALIDATION DU FORMAT
       ↓
ENVOI AU BACKEND
       ↓
RÉPONSE DU BACKEND
       ↓
AFFICHAGE DU RÉSULTAT
```

## 7. Sécurité

### 7.1 Authentification

- Mots de passe hachés (bcrypt, argon2)
- JWT ou session-based authentication
- Protection contre les attaques de force brute
- Expiration des sessions

### 7.2 Autorisation

- Rôles et permissions
- Vérification des permissions avant chaque action
- Principe du moindre privilège

### 7.3 Protection des Données

- Chiffrement des données sensibles
- HTTPS obligatoire
- Validation des entrées
- Protection contre les injections (SQL, XSS, CSRF)

### 7.4 Validation QR Code

- Validation côté serveur
- Vérification de l'existence de l'identifiant
- Vérification du statut de la carte
- Protection contre les QR Codes falsifiés

### 7.5 Logs et Audit Trail

- Journalisation des actions
- Logs d'accès
- Logs d'erreurs
- Conservation des logs

### 7.6 Contrôle des Sessions Multiples

- Empêcher les sessions multiples pour une même personne
- Détection des sessions actives
- Gestion des conflits

## 8. Performance

### 8.1 Optimisation

- Mise en cache des données fréquemment accédées
- Indexation de la base de données
- Pagination des listes
- Lazy loading

### 8.2 Monitoring

- Surveillance des performances
- Alertes en cas de problème
- Logs de performance

## 9. Déploiement

### 9.1 Environnements

- **Développement** : Environnement local
- **Test** : Environnement de test
- **Production** : Environnement de production

### 9.2 Infrastructure (À Déterminer)

Options possibles :

- **VPS** : Serveur virtuel privé
- **Cloud** : AWS, Azure, GCP
- **PaaS** : Heroku, Railway, etc.

### 9.3 CI/CD (À Déterminer)

Outils possibles :

- **GitHub Actions**
- **GitLab CI**
- **Jenkins**

## 10. Tests

### 10.1 Types de Tests

- **Tests unitaires** : Tests des fonctions et modules individuels
- **Tests d'intégration** : Tests des interactions entre modules
- **Tests end-to-end** : Tests des flux complets
- **Tests de performance** : Tests de charge et de performance

### 10.2 Couverture

Objectif de couverture > 80%

Voir [testing-strategy.md](testing-strategy.md) pour le détail complet.

## 11. Documentation

### 11.1 Documentation Technique

- Architecture du système
- API documentation (Swagger/OpenAPI)
- Guide de contribution
- Guide de déploiement

### 11.2 Documentation Utilisateur

- Guide de l'agent
- Guide de l'administrateur
- FAQ

## 12. Conclusion

Cette architecture technique définit la structure globale du système LabAccess. Elle est conçue pour être flexible et évolutive, permettant l'intégration de différentes technologies selon les besoins et les contraintes du projet.
