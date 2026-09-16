# Cahier des Charges - LabAccess

## 1. Présentation du Projet

### 1.1 Nom du Projet

**Nom provisoire :** LabAccess

**Nom proposé :** LabAccess - Système de Gestion et de Contrôle d'Accès pour Laboratoire Informatique Universitaire

### 1.2 Contexte

Les laboratoires informatiques universitaires nécessitent un système de contrôle d'accès efficace pour :
- Gérer les entrées et sorties des étudiants et professeurs
- Suivre l'utilisation des postes informatiques
- Maintenir un historique des accès
- Gérer les réservations de salles
- Assurer la sécurité des équipements

### 1.3 Problème

Actuellement, le contrôle d'accès est manuel, papier ou inexistant, ce qui entraîne :
- Perte de traçabilité des accès
- Difficulté à savoir qui est présent dans le laboratoire
- Impossibilité de suivre l'utilisation des postes
- Conflits de réservation de salles
- Absence de statistiques d'utilisation

### 1.4 Solution

LabAccess est une plateforme numérique qui permet :
- Contrôle d'accès via QR Code sur les cartes
- Gestion automatisée des sessions d'entrée/sortie
- Attribution et suivi des postes informatiques
- Réservation de salles par les professeurs
- Historique complet et statistiques

## 2. Objectifs du Projet

### 2.1 Objectifs Principaux

1. **Contrôle d'Accès**
   - Scanner les QR Code des cartes
   - Identifier les personnes (étudiants, professeurs)
   - Vérifier le statut des cartes
   - Enregistrer les entrées et sorties

2. **Gestion des Sessions**
   - Créer automatiquement une session à l'entrée
   - Détecter automatiquement la sortie (deuxième scan)
   - Calculer la durée de présence
   - Attribuer des postes informatiques

3. **Gestion des Postes**
   - Suivre l'état des postes (disponible, occupé, maintenance, hors service)
   - Attribuer des postes aux étudiants
   - Gérer l'option PC privé
   - Libérer automatiquement les postes

4. **Gestion des Professeurs**
   - Workflow spécifique pour les professeurs
   - Réservation de laboratoires
   - Réservation d'auditoires
   - Vérification des conflits

5. **Administration**
   - Gestion des utilisateurs (étudiants, professeurs, agents)
   - Gestion des ressources (facultés, promotions, salles, ordinateurs)
   - Configuration du système
   - Rapports et statistiques

### 2.2 Objectifs Secondaires

- Interface intuitive pour les agents
- Dashboard en temps réel
- Historique complet et exportable
- Responsive design
- Accessibilité
- Performance

## 3. Utilisateurs

### 3.1 Administrateur

**Rôle :** Gestion complète du système

**Responsabilités :**
- Gestion des utilisateurs (étudiants, professeurs, agents)
- Gestion des ressources (facultés, promotions, salles, ordinateurs)
- Gestion des cartes et QR Codes
- Configuration du système
- Accès à tous les rapports et statistiques

**Permissions :**
- CRUD sur toutes les entités
- Accès à tous les dashboards
- Modification des paramètres système

### 3.2 Agent

**Rôle :** Contrôle d'accès quotidien

**Responsabilités :**
- Scan des cartes
- Identification des personnes
- Attribution des postes
- Consultation des personnes présentes
- Consultation des sessions actives
- Consultation de l'historique

**Permissions :**
- Scan de QR Code
- Création/fermeture de sessions
- Attribution de postes
- Consultation (lecture seule) des données

### 3.3 Étudiant

**Rôle :** Utilisateur final

**Responsabilités :**
- Présenter sa carte à l'agent
- Utiliser un poste du laboratoire ou son PC personnel
- Respecter les règles du laboratoire

**Permissions :**
- Aucun accès direct au système
- Accès via l'agent

### 3.4 Professeur

**Rôle :** Utilisateur avec droits étendus

**Responsabilités :**
- Présenter sa carte à l'agent
- Utiliser un poste du laboratoire
- Réserver des salles
- Réserver des auditoires

**Permissions :**
- Accès via l'agent
- Création de réservations (via interface dédiée ou agent)

## 4. Fonctionnalités

### 4.1 Authentification

- Login pour administrateurs et agents
- Gestion des rôles
- Permissions basées sur les rôles
- Session sécurisée

### 4.2 Gestion des Personnes

#### Étudiants
- CRUD complet
- Informations : nom, postnom, prénom, matricule, faculté, promotion, photo
- Association avec une carte
- Historique des sessions

#### Professeurs
- CRUD complet
- Informations : nom, postnom, prénom, matricule, département, photo
- Association avec une carte
- Historique des sessions
- Réservations

#### Agents
- CRUD complet
- Informations : nom, postnom, prénom, identifiant
- Historique des actions

#### Facultés
- CRUD complet
- Nom, description

#### Promotions
- CRUD complet
- Nom, année, faculté associée

### 4.3 Gestion des Cartes

- CRUD complet
- Génération d'identifiant QR unique
- États : active, inactive, bloquée
- Association avec une personne
- Historique des utilisations

### 4.4 Scanner QR Code

- Interface de scan
- Intégration avec périphériques (caméra, scanner USB)
- Validation de l'identifiant
- Gestion des erreurs (QR inconnu, invalide, carte inactive/bloquée)

### 4.5 Gestion des Sessions

- Création automatique à l'entrée
- Détection automatique de la sortie (deuxième scan)
- Enregistrement des heures d'entrée et sortie
- Calcul de la durée
- Association avec un poste ou PC privé
- États : active, completed, cancelled

### 4.6 Gestion des Ordinateurs

- CRUD complet
- Informations : identifiant, numéro, salle
- États : available, occupied, maintenance, out_of_service
- Attribution automatique lors d'une session
- Libération automatique à la fin d'une session

### 4.7 Gestion des Salles

- CRUD complet
- Types : laboratoire, auditoire
- Capacité
- Liste des ordinateurs (pour laboratoires)

### 4.8 Réservations

- CRUD complet
- Informations : salle, date, heure de début, heure de fin, motif, professeur, statut
- Vérification des conflits
- États : pending, confirmed, cancelled, completed

### 4.9 Dashboard Agent

- Statistiques en temps réel :
  - Personnes présentes
  - Étudiants présents
  - Professeurs présents
  - PC disponibles
  - PC occupés
  - Sessions actives
- Liste des personnes présentes
- Liste des sessions actives
- Liste des réservations du jour

### 4.10 Dashboard Administrateur

- Statistiques globales
- Graphiques d'utilisation
- Tendances
- Rapports détaillés

### 4.11 Historique

- Liste complète des sessions
- Filtres : date, personne, salle, poste
- Export des données
- Statistiques agrégées

### 4.12 Paramètres

- Configuration du système
- Gestion des rôles et permissions
- Logs système
- Sauvegardes

## 5. Workflow d'une Session

### 5.1 Entrée

```
CARTE PRÉSENTÉE
       ↓
SCAN QR CODE
       ↓
IDENTIFICATION DE LA PERSONNE
       ↓
VALIDATION DE LA CARTE
       ↓
DÉTERMINATION DU TYPE (ÉTUDIANT/PROFESSEUR)
       ↓
CRÉATION SESSION
       ↓
ATTRIBUTION PC OU PC PRIVÉ
       ↓
SESSION ACTIVE
```

### 5.2 Sortie

```
DEUXIÈME SCAN
       ↓
RETROUVE SESSION ACTIVE
       ↓
ENREGISTRE HEURE DE SORTIE
       ↓
SESSION TERMINÉE
       ↓
LIBÉRATION DU PC
       ↓
CARTE RENDUE
```

## 6. Règles Métier

Voir [business-rules.md](business-rules.md) pour le détail complet.

### Règles Principales

1. Une carte inactive ou bloquée ne permet pas l'accès
2. Une personne ne peut pas avoir deux sessions actives simultanément dans la même salle
3. Le deuxième scan d'une personne ayant une session active est interprété comme une sortie
4. Une session terminée doit enregistrer une heure de sortie
5. Lorsqu'un PC est attribué, son statut devient occupé
6. Lorsqu'une session utilisant un PC se termine, le PC redevient disponible
7. Un PC privé ne change pas le statut des ordinateurs du laboratoire
8. Un PC en maintenance ne peut pas être attribué
9. Un PC hors service ne peut pas être attribué
10. Deux réservations incompatibles ne peuvent pas exister pour une même salle

## 7. Interface Utilisateur

### 7.1 Design System

Voir [design-system.md](design-system.md) pour le détail complet.

### 7.2 Pages

Voir [use-cases.md](use-cases.md) pour le détail de chaque page.

#### Authentification
- Login

#### Agent
- Dashboard
- Scanner
- Session active
- Personnes présentes
- Ordinateurs
- Historique
- Réservations

#### Administration
- Dashboard
- Étudiants
- Professeurs
- Agents
- Facultés
- Promotions
- Cartes
- Ordinateurs
- Salles
- Réservations
- Sessions
- Historique
- Paramètres

## 8. Architecture Technique

Voir [architecture.md](architecture.md) pour le détail complet.

### 8.1 Frontend
- HTML5, CSS3, JavaScript
- Design system professionnel
- Responsive design

### 8.2 Backend
- Framework à déterminer
- API RESTful
- Authentification et autorisation

### 8.3 Base de Données
- SGBD à déterminer
- Structure définie dans [database.md](database.md)

### 8.4 Scanner
- Abstraction pour intégration de périphériques
- Caméra, scanner QR USB, etc.

## 9. QR Code

### 9.1 Format

Le QR Code contient un identifiant unique, pas les informations personnelles.

Format : `LAB-{TYPE}-{ANNÉE}-{NUMÉRO}`

Exemples :
- `LAB-STU-2026-00015` (étudiant)
- `LAB-PRF-2026-00003` (professeur)

### 9.2 Génération

- Généré automatiquement à la création de la carte
- Unique pour chaque carte
- Stocké dans la base de données

### 9.3 Validation

- Vérification de l'existence de l'identifiant
- Vérification du statut de la carte
- Vérification de l'association avec une personne

## 10. Livrables

### 10.1 Documentation
- Cahier des charges
- Architecture technique
- Base de données
- Design system
- Règles métier
- Workflows
- Roadmap
- Stratégie de tests

### 10.2 Organisation GitHub
- README.md
- Templates d'Issues
- Template de Pull Request
- Labels
- Milestones
- Workflow Git

### 10.3 Application (à développer)
- Frontend
- Backend
- Base de données
- Tests

## 11. Contraintes

### 11.1 Contraintes Techniques
- Compatible avec les navigateurs modernes
- Responsive design
- Accessibilité (WCAG AA)
- Performance

### 11.2 Contraintes Fonctionnelles
- Interface intuitive pour les agents
- Temps de réponse rapide (< 2 secondes)
- Fiabilité du scan QR Code

### 11.3 Contraintes de Sécurité
- Protection des données personnelles
- Authentification sécurisée
- Logs et audit trail
- Validation des entrées

## 12. Critères de Succès

- Système fonctionnel et stable
- Interface intuitive
- Couverture des tests > 80%
- Documentation complète
- Performance satisfaisante
- Sécurité validée

## 13. Planning

Voir [roadmap.md](roadmap.md) pour le planning détaillé.

## 14. Conclusion

Ce cahier des charges définit l'ensemble des spécifications du projet LabAccess. Il servira de référence pour le développement et la validation du système.
