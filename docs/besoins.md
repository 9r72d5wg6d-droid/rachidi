# Besoins - LabAccess

## 1. Besoins Fonctionnels

### 1.1 Besoins de Gestion des Accès

#### BF-001 : Identification des Personnes
**Description :** Le système doit permettre d'identifier les étudiants et professeurs via leur carte QR Code.

**Critères :**
- Le scan du QR Code doit identifier la personne
- Les informations de la personne doivent être affichées
- Le type (étudiant/professeur) doit être déterminé automatiquement

**Priorité :** Haute

#### BF-002 : Validation des Cartes
**Description :** Le système doit valider le statut de la carte avant d'autoriser l'accès.

**Critères :**
- Vérifier si la carte est active
- Vérifier si la carte est bloquée
- Refuser l'accès si la carte est inactive ou bloquée

**Priorité :** Haute

#### BF-003 : Enregistrement des Entrées
**Description :** Le système doit enregistrer automatiquement l'entrée d'une personne.

**Critères :**
- Créer une session à l'entrée
- Enregistrer l'heure d'entrée
- Associer la session à la personne et à l'agent

**Priorité :** Haute

#### BF-004 : Enregistrement des Sorties
**Description :** Le système doit enregistrer automatiquement la sortie d'une personne.

**Critères :**
- Détecter le deuxième scan comme une sortie
- Enregistrer l'heure de sortie
- Terminer la session active
- Libérer le poste attribué

**Priorité :** Haute

#### BF-005 : Attribution de Postes
**Description :** Le système doit permettre d'attribuer un poste informatique à une personne.

**Critères :**
- Afficher les postes disponibles
- Permettre la sélection d'un poste
- Marquer le poste comme occupé
- Associer le poste à la session

**Priorité :** Haute

#### BF-006 : Option PC Privé
**Description :** Le système doit permettre de sélectionner l'option PC privé.

**Critères :**
- Permettre la sélection de PC privé
- Ne pas occuper de poste du laboratoire
- Enregistrer le type de poste dans la session

**Priorité :** Moyenne

### 1.2 Besoins de Gestion des Professeurs

#### BF-007 : Workflow Professeur
**Description :** Le système doit proposer des actions spécifiques aux professeurs.

**Critères :**
- Proposer de travailler sur un PC du laboratoire
- Proposer de réserver le laboratoire
- Proposer de réserver un auditoire

**Priorité :** Haute

#### BF-008 : Réservation de Salles
**Description :** Le système doit permettre aux professeurs de réserver des salles.

**Critères :**
- Sélectionner une salle (laboratoire ou auditoire)
- Sélectionner une date
- Sélectionner une heure de début et de fin
- Saisir un motif
- Enregistrer la réservation

**Priorité :** Haute

#### BF-009 : Vérification des Conflits
**Description :** Le système doit empêcher les réservations conflictuelles.

**Critères :**
- Vérifier les réservations existantes pour la salle
- Vérifier les chevauchements de dates et heures
- Refuser la réservation en cas de conflit

**Priorité :** Haute

### 1.3 Besoins de Gestion des Ressources

#### BF-010 : Gestion des Étudiants
**Description :** Le système doit permettre la gestion complète des étudiants.

**Critères :**
- Créer, lire, mettre à jour, supprimer des étudiants
- Enregistrer : nom, postnom, prénom, matricule, faculté, promotion, photo
- Associer une carte à un étudiant

**Priorité :** Haute

#### BF-011 : Gestion des Professeurs
**Description :** Le système doit permettre la gestion complète des professeurs.

**Critères :**
- Créer, lire, mettre à jour, supprimer des professeurs
- Enregistrer : nom, postnom, prénom, matricule, département, photo
- Associer une carte à un professeur

**Priorité :** Haute

#### BF-012 : Gestion des Agents
**Description :** Le système doit permettre la gestion des agents.

**Critères :**
- Créer, lire, mettre à jour, supprimer des agents
- Enregistrer : nom, postnom, prénom, identifiant
- Associer un compte de connexion

**Priorité :** Haute

#### BF-013 : Gestion des Facultés
**Description :** Le système doit permettre la gestion des facultés.

**Critères :**
- Créer, lire, mettre à jour, supprimer des facultés
- Enregistrer : nom, description

**Priorité :** Moyenne

#### BF-014 : Gestion des Promotions
**Description :** Le système doit permettre la gestion des promotions.

**Critères :**
- Créer, lire, mettre à jour, supprimer des promotions
- Enregistrer : nom, année, faculté associée

**Priorité :** Moyenne

#### BF-015 : Gestion des Cartes
**Description :** Le système doit permettre la gestion des cartes.

**Critères :**
- Créer, lire, mettre à jour, supprimer des cartes
- Générer un identifiant QR unique
- Définir le statut : active, inactive, bloquée
- Associer une carte à une personne

**Priorité :** Haute

#### BF-016 : Gestion des Salles
**Description :** Le système doit permettre la gestion des salles.

**Critères :**
- Créer, lire, mettre à jour, supprimer des salles
- Définir le type : laboratoire, auditoire
- Enregistrer la capacité
- Associer des ordinateurs (pour laboratoires)

**Priorité :** Haute

#### BF-017 : Gestion des Ordinateurs
**Description :** Le système doit permettre la gestion des ordinateurs.

**Critères :**
- Créer, lire, mettre à jour, supprimer des ordinateurs
- Enregistrer : identifiant, numéro, salle
- Définir l'état : available, occupied, maintenance, out_of_service

**Priorité :** Haute

### 1.4 Besoins de Reporting

#### BF-018 : Dashboard Agent
**Description :** Le système doit fournir un dashboard pour les agents.

**Critères :**
- Afficher les statistiques en temps réel
- Afficher la liste des personnes présentes
- Afficher la liste des sessions actives
- Afficher les réservations du jour

**Priorité :** Haute

#### BF-019 : Dashboard Administrateur
**Description :** Le système doit fournir un dashboard pour les administrateurs.

**Critères :**
- Afficher les statistiques globales
- Afficher des graphiques d'utilisation
- Afficher des tendances
- Afficher des rapports détaillés

**Priorité :** Haute

#### BF-020 : Historique des Sessions
**Description :** Le système doit permettre de consulter l'historique des sessions.

**Critères :**
- Afficher la liste complète des sessions
- Permettre des filtres : date, personne, salle, poste
- Permettre l'export des données
- Afficher les statistiques agrégées

**Priorité :** Haute

### 1.5 Besoins d'Authentification

#### BF-021 : Login
**Description :** Le système doit permettre la connexion des administrateurs et agents.

**Critères :**
- Formulaire de connexion
- Validation des identifiants
- Gestion de la session

**Priorité :** Haute

#### BF-022 : Gestion des Rôles
**Description :** Le système doit gérer les rôles des utilisateurs.

**Critères :**
- Définir les rôles : administrateur, agent
- Associer un rôle à chaque utilisateur
- Appliquer les permissions selon le rôle

**Priorité :** Haute

#### BF-023 : Permissions
**Description :** Le système doit gérer les permissions basées sur les rôles.

**Critères :**
- Définir les permissions pour chaque rôle
- Appliquer les permissions sur chaque fonctionnalité
- Refuser l'accès aux fonctionnalités non autorisées

**Priorité :** Haute

## 2. Besoins Non Fonctionnels

### 2.1 Besoins de Performance

#### BNF-001 : Temps de Réponse
**Description :** Le système doit répondre rapidement aux actions des utilisateurs.

**Critères :**
- Temps de réponse < 2 secondes pour les actions courantes
- Temps de scan QR Code < 1 seconde

**Priorité :** Haute

#### BNF-002 : Charge
**Description :** Le système doit supporter la charge prévue.

**Critères :**
- Supporter 100 utilisateurs simultanés
- Supporter 1000 scans par jour

**Priorité :** Moyenne

### 2.2 Besoins de Sécurité

#### BNF-003 : Authentification
**Description :** Le système doit authentifier les utilisateurs de manière sécurisée.

**Critères :**
- Utilisation de mots de passe sécurisés
- Session sécurisée
- Protection contre les attaques de force brute

**Priorité :** Haute

#### BNF-004 : Autorisation
**Description :** Le système doit autoriser uniquement les actions permises.

**Critères :**
- Vérification des permissions avant chaque action
- Refus des actions non autorisées

**Priorité :** Haute

#### BNF-005 : Protection des Données
**Description :** Le système doit protéger les données personnelles.

**Critères :**
- Chiffrement des données sensibles
- Respect des réglementations sur la protection des données
- Logs et audit trail

**Priorité :** Haute

#### BNF-006 : Validation des Entrées
**Description :** Le système doit valider toutes les entrées utilisateur.

**Critères :**
- Validation côté client
- Validation côté serveur
- Protection contre les injections

**Priorité :** Haute

### 2.3 Besoins d'Utilisabilité

#### BNF-007 : Interface Intuitive
**Description :** L'interface doit être intuitive pour les agents.

**Critères :**
- Navigation simple
- Actions claires
- Feedback immédiat

**Priorité :** Haute

#### BNF-008 : Accessibilité
**Description :** Le système doit être accessible.

**Critères :**
- Conformité WCAG AA
- Support des lecteurs d'écran
- Contraste suffisant

**Priorité :** Moyenne

#### BNF-009 : Responsive Design
**Description :** L'interface doit s'adapter à différents écrans.

**Critères :**
- Compatible desktop
- Compatible tablette
- Compatible mobile

**Priorité :** Moyenne

### 2.4 Besoins de Fiabilité

#### BNF-010 : Disponibilité
**Description :** Le système doit être disponible pendant les heures de travail.

**Critères :**
- Disponibilité > 99% pendant les heures de travail
- Sauvegardes régulières

**Priorité :** Haute

#### BNF-011 : Gestion des Erreurs
**Description :** Le système doit gérer les erreurs de manière appropriée.

**Critères :**
- Messages d'erreur clairs
- Récupération automatique quand possible
- Logs des erreurs

**Priorité :** Haute

### 2.5 Besoins de Maintenabilité

#### BNF-012 : Code Organisé
**Description :** Le code doit être organisé et documenté.

**Critères :**
- Structure claire
- Commentaires appropriés
- Documentation à jour

**Priorité :** Moyenne

#### BNF-013 : Tests
**Description :** Le système doit avoir une couverture de tests suffisante.

**Critères :**
- Couverture de tests > 80%
- Tests unitaires
- Tests d'intégration

**Priorité :** Haute

## 3. Besoins d'Intégration

### 3.1 Scanner QR Code

#### BI-001 : Intégration Scanner
**Description :** Le système doit s'intégrer avec des scanners QR Code.

**Critères :**
- Support des scanners QR USB
- Support des caméras
- Abstraction pour d'autres périphériques

**Priorité :** Haute

#### BI-002 : Validation QR Code
**Description :** Le système doit valider les QR Codes scannés.

**Critères :**
- Vérification du format
- Vérification de l'existence
- Gestion des erreurs

**Priorité :** Haute

## 4. Priorisation

### 4.1 Priorité Haute (Must Have)
- BF-001 à BF-006 (Gestion des accès)
- BF-007 à BF-009 (Gestion des professeurs)
- BF-010 à BF-012 (Gestion des personnes)
- BF-015 à BF-017 (Gestion des ressources)
- BF-018 à BF-020 (Reporting)
- BF-021 à BF-023 (Authentification)
- BNF-001, BNF-003 à BNF-006, BNF-007, BNF-010, BNF-011, BNF-013 (Non fonctionnels critiques)
- BI-001, BI-002 (Intégration scanner)

### 4.2 Priorité Moyenne (Should Have)
- BF-006 (Option PC privé)
- BF-013, BF-014 (Gestion facultés et promotions)
- BNF-002 (Charge)
- BNF-008, BNF-009 (Accessibilité et responsive)
- BNF-012 (Maintenabilité)

### 4.3 Priorité Basse (Nice to Have)
- Fonctionnalités avancées de reporting
- Optimisations de performance
- Fonctionnalités additionnelles

## 5. Conclusion

Ce document définit les besoins fonctionnels et non fonctionnels du projet LabAccess. Il servira de référence pour le développement et la validation du système.
