# Use Cases - LabAccess

## 1. Cas d'Utilisation Principaux

### UC-001 : Connexion au Système

**Acteur :** Administrateur, Agent

**Objectif :** Se connecter au système LabAccess

**Préconditions :**
- L'utilisateur a un compte valide
- Le système est accessible

**Scénario Principal :**
1. L'utilisateur accède à la page de login
2. L'utilisateur saisit son identifiant
3. L'utilisateur saisit son mot de passe
4. L'utilisateur clique sur "Connexion"
5. Le système valide les identifiants
6. Le système crée une session utilisateur
7. Le système redirige vers le dashboard approprié

**Scénarios Alternatifs :**
- 5a. Identifiants invalides : Le système affiche un message d'erreur
- 5b. Compte désactivé : Le système affiche un message d'erreur

**Postconditions :**
- L'utilisateur est connecté
- L'utilisateur a accès aux fonctionnalités de son rôle

---

### UC-002 : Scanner une Carte (Entrée)

**Acteur :** Agent

**Objectif :** Scanner la carte d'une personne pour l'entrée

**Préconditions :**
- L'agent est connecté
- La personne présente sa carte
- Le scanner est fonctionnel

**Scénario Principal :**
1. L'agent clique sur "Scanner"
2. L'agent scanne le QR Code de la carte
3. Le système lit l'identifiant du QR Code
4. Le système recherche la personne associée
5. Le système vérifie le statut de la carte
6. Le système détermine le type de personne
7. Le système affiche les informations de la personne
8. Le système crée une session
9. L'agent attribue un poste ou sélectionne PC privé
10. Le système enregistre la session
11. Le système confirme l'entrée

**Scénarios Alternatifs :**
- 4a. QR Code inconnu : Le système affiche "QR Code inconnu"
- 5a. Carte inactive : Le système affiche "Carte inactive"
- 5b. Carte bloquée : Le système affiche "Carte bloquée"
- 6a. Session active existante : Le système propose de terminer la session (voir UC-003)

**Postconditions :**
- Une session est créée
- La personne est autorisée à entrer
- Un poste est attribué (si applicable)

---

### UC-003 : Scanner une Carte (Sortie)

**Acteur :** Agent

**Objectif :** Scanner la carte d'une personne pour la sortie

**Préconditions :**
- L'agent est connecté
- La personne a une session active
- Le scanner est fonctionnel

**Scénario Principal :**
1. L'agent clique sur "Scanner"
2. L'agent scanne le QR Code de la carte
3. Le système lit l'identifiant du QR Code
4. Le système recherche la personne associée
5. Le système détecte une session active
6. Le système enregistre l'heure de sortie
7. Le système termine la session
8. Le système libère le poste attribué
9. Le système confirme la sortie

**Scénarios Alternatifs :**
- 5a. Aucune session active : Le système propose de créer une nouvelle session (voir UC-002)

**Postconditions :**
- La session est terminée
- Le poste est libéré
- La personne peut quitter le laboratoire

---

### UC-004 : Attribuer un Poste

**Acteur :** Agent

**Objectif :** Attribuer un poste informatique à une personne

**Préconditions :**
- Une session est en cours de création
- Des postes sont disponibles

**Scénario Principal :**
1. Le système affiche la liste des postes disponibles
2. L'agent sélectionne un poste
3. Le système vérifie que le poste est disponible
4. Le système attribue le poste à la session
5. Le système marque le poste comme occupé
6. Le système confirme l'attribution

**Scénarios Alternatifs :**
- 3a. Poste non disponible : Le système affiche un message d'erreur
- 3b. Poste en maintenance : Le système affiche un message d'erreur
- 3c. Poste hors service : Le système affiche un message d'erreur

**Postconditions :**
- Le poste est attribué
- Le poste est marqué comme occupé

---

### UC-005 : Sélectionner PC Privé

**Acteur :** Agent

**Objectif :** Sélectionner l'option PC privé pour une personne

**Préconditions :**
- Une session est en cours de création

**Scénario Principal :**
1. L'agent clique sur "PC Privé"
2. Le système enregistre le type de poste comme "privé"
3. Le système confirme la sélection

**Postconditions :**
- Aucun poste du laboratoire n'est occupé
- La session est marquée comme PC privé

---

### UC-006 : Consulter les Personnes Présentes

**Acteur :** Agent, Administrateur

**Objectif :** Consulter la liste des personnes présentes dans le laboratoire

**Préconditions :**
- L'utilisateur est connecté

**Scénario Principal :**
1. L'utilisateur accède à la page "Personnes présentes"
2. Le système affiche la liste des personnes avec session active
3. Le système affiche pour chaque personne : nom, type, heure d'entrée, poste

**Postconditions :**
- L'utilisateur voit la liste des personnes présentes

---

### UC-007 : Consulter les Sessions Actives

**Acteur :** Agent, Administrateur

**Objectif :** Consulter la liste des sessions actives

**Préconditions :**
- L'utilisateur est connecté

**Scénario Principal :**
1. L'utilisateur accède à la page "Sessions actives"
2. Le système affiche la liste des sessions actives
3. Le système affiche pour chaque session : personne, salle, heure d'entrée, poste

**Postconditions :**
- L'utilisateur voit la liste des sessions actives

---

### UC-008 : Consulter les Postes Disponibles

**Acteur :** Agent, Administrateur

**Objectif :** Consulter la liste des postes disponibles

**Préconditions :**
- L'utilisateur est connecté

**Scénario Principal :**
1. L'utilisateur accède à la page "Ordinateurs"
2. Le système affiche la liste des postes
3. Le système indique l'état de chaque poste : disponible, occupé, maintenance, hors service

**Postconditions :**
- L'utilisateur voit l'état de tous les postes

---

### UC-009 : Créer un Étudiant

**Acteur :** Administrateur

**Objectif :** Créer un nouvel étudiant dans le système

**Préconditions :**
- L'administrateur est connecté
- L'administrateur a les permissions nécessaires

**Scénario Principal :**
1. L'administrateur accède à la page "Étudiants"
2. L'administrateur clique sur "Nouvel étudiant"
3. L'administrateur saisit les informations : nom, postnom, prénom, matricule, faculté, promotion
4. L'administrateur peut ajouter une photo
5. L'administrateur peut associer une carte existante
6. L'administrateur clique sur "Enregistrer"
7. Le système valide les informations
8. Le système crée l'étudiant
9. Le système confirme la création

**Scénarios Alternatifs :**
- 7a. Informations invalides : Le système affiche les erreurs de validation
- 7b. Matricule déjà existant : Le système affiche un message d'erreur

**Postconditions :**
- L'étudiant est créé
- L'étudiant peut être utilisé dans le système

---

### UC-010 : Créer un Professeur

**Acteur :** Administrateur

**Objectif :** Créer un nouveau professeur dans le système

**Préconditions :**
- L'administrateur est connecté
- L'administrateur a les permissions nécessaires

**Scénario Principal :**
1. L'administrateur accède à la page "Professeurs"
2. L'administrateur clique sur "Nouveau professeur"
3. L'administrateur saisit les informations : nom, postnom, prénom, matricule, département
4. L'administrateur peut ajouter une photo
5. L'administrateur peut associer une carte existante
6. L'administrateur clique sur "Enregistrer"
7. Le système valide les informations
8. Le système crée le professeur
9. Le système confirme la création

**Scénarios Alternatifs :**
- 7a. Informations invalides : Le système affiche les erreurs de validation
- 7b. Matricule déjà existant : Le système affiche un message d'erreur

**Postconditions :**
- Le professeur est créé
- Le professeur peut être utilisé dans le système

---

### UC-011 : Créer un Agent

**Acteur :** Administrateur

**Objectif :** Créer un nouvel agent dans le système

**Préconditions :**
- L'administrateur est connecté
- L'administrateur a les permissions nécessaires

**Scénario Principal :**
1. L'administrateur accède à la page "Agents"
2. L'administrateur clique sur "Nouvel agent"
3. L'administrateur saisit les informations : nom, postnom, prénom, identifiant
4. L'administrateur définit un mot de passe
5. L'administrateur clique sur "Enregistrer"
6. Le système valide les informations
7. Le système crée l'agent
8. Le système confirme la création

**Scénarios Alternatifs :**
- 6a. Informations invalides : Le système affiche les erreurs de validation
- 6b. Identifiant déjà existant : Le système affiche un message d'erreur

**Postconditions :**
- L'agent est créé
- L'agent peut se connecter au système

---

### UC-012 : Créer une Carte

**Acteur :** Administrateur

**Objectif :** Créer une nouvelle carte dans le système

**Préconditions :**
- L'administrateur est connecté
- L'administrateur a les permissions nécessaires

**Scénario Principal :**
1. L'administrateur accède à la page "Cartes"
2. L'administrateur clique sur "Nouvelle carte"
3. Le système génère automatiquement un identifiant QR unique
4. L'administrateur sélectionne le type : étudiant ou professeur
5. L'administrateur associe la carte às une personne
6. L'administrateur définit le statut : active
7. L'administrateur clique sur "Enregistrer"
8. Le système valide les informations
9. Le système crée la carte
10. Le système confirme la création

**Scénarios Alternatifs :**
- 8a. Informations invalides : Le système affiche les erreurs de validation

**Postconditions :**
- La carte est créée
- La carte peut être utilisée pour l'accès

---

### UC-013 : Bloquer une Carte

**Acteur :** Administrateur

**Objectif :** Bloquer une carte existante

**Préconditions :**
- L'administrateur est connecté
- La carte existe

**Scénario Principal :**
1. L'administrateur accède à la page "Cartes"
2. L'administrateur sélectionne une carte
3. L'administrateur clique sur "Bloquer"
4. Le système confirme l'action
5. Le système change le statut de la carte à "bloquée"
6. Le système confirme le blocage

**Postconditions :**
- La carte est bloquée
- La carte ne peut plus être utilisée pour l'accès

---

### UC-014 : Créer une Salle

**Acteur :** Administrateur

**Objectif :** Créer une nouvelle salle dans le système

**Préconditions :**
- L'administrateur est connecté
- L'administrateur a les permissions nécessaires

**Scénario Principal :**
1. L'administrateur accède à la page "Salles"
2. L'administrateur clique sur "Nouvelle salle"
3. L'administrateur saisit les informations : nom, type (laboratoire/auditoire), capacité
4. L'administrateur clique sur "Enregistrer"
5. Le système valide les informations
6. Le système crée la salle
7. Le système confirme la création

**Scénarios Alternatifs :**
- 5a. Informations invalides : Le système affiche les erreurs de validation

**Postconditions :**
- La salle est créée
- La salle peut être utilisée dans le système

---

### UC-015 : Créer un Ordinateur

**Acteur :** Administrateur

**Objectif :** Créer un nouvel ordinateur dans le système

**Préconditions :**
- L'administrateur est connecté
- L'administrateur a les permissions nécessaires
- Une salle existe

**Scénario Principal :**
1. L'administrateur accède à la page "Ordinateurs"
2. L'administrateur clique sur "Nouvel ordinateur"
3. L'administrateur saisit les informations : identifiant, numéro
4. L'administrateur sélectionne la salle
5. L'administrateur définit l'état : available
6. L'administrateur clique sur "Enregistrer"
7. Le système valide les informations
8. Le système crée l'ordinateur
9. Le système confirme la création

**Scénarios Alternatifs :**
- 7a. Informations invalides : Le système affiche les erreurs de validation

**Postconditions :**
- L'ordinateur est créé
- L'ordinateur peut être attribué

---

### UC-016 : Changer l'État d'un Ordinateur

**Acteur :** Administrateur

**Objectif :** Changer l'état d'un ordinateur

**Préconditions :**
- L'administrateur est connecté
- L'ordinateur existe

**Scénario Principal :**
1. L'administrateur accède à la page "Ordinateurs"
2. L'administrateur sélectionne un ordinateur
3. L'administrateur clique sur "Modifier"
4. L'administrateur change l'état : available, occupied, maintenance, out_of_service
5. L'administrateur clique sur "Enregistrer"
6. Le système valide les informations
7. Le système met à jour l'ordinateur
8. Le système confirme la modification

**Postconditions :**
- L'état de l'ordinateur est mis à jour
- L'ordinateur est disponible ou non selon l'état

---

### UC-017 : Réserver une Salle (Professeur)

**Acteur :** Professeur, Agent (au nom du professeur)

**Objectif :** Réserver une salle pour un cours ou une activité

**Préconditions :**
- Le professeur est identifié
- La salle existe

**Scénario Principal :**
1. L'utilisateur accède à l'interface de réservation
2. L'utilisateur sélectionne une salle
3. L'utilisateur sélectionne une date
4. L'utilisateur sélectionne une heure de début
5. L'utilisateur sélectionne une heure de fin
6. L'utilisateur saisit un motif
7. L'utilisateur clique sur "Réserver"
8. Le système vérifie les conflits
9. Le système crée la réservation
10. Le système confirme la réservation

**Scénarios Alternatifs :**
- 8a. Conflit détecté : Le système affiche un message d'erreur et les détails du conflit

**Postconditions :**
- La réservation est créée
- La salle est réservée pour la période spécifiée

---

### UC-018 : Consulter l'Historique

**Acteur :** Agent, Administrateur

**Objectif :** Consulter l'historique des sessions

**Préconditions :**
- L'utilisateur est connecté

**Scénario Principal :**
1. L'utilisateur accède à la page "Historique"
2. Le système affiche la liste des sessions terminées
3. L'utilisateur peut appliquer des filtres : date, personne, salle, poste
4. Le système affiche les sessions filtrées
5. L'utilisateur peut exporter les données

**Postconditions :**
- L'utilisateur voit l'historique des sessions

---

### UC-019 : Consulter le Dashboard Agent

**Acteur :** Agent

**Objectif :** Consulter le dashboard avec les statistiques en temps réel

**Préconditions :**
- L'agent est connecté

**Scénario Principal :**
1. L'agent accède au dashboard
2. Le système affiche les statistiques :
   - Personnes présentes
   - Étudiants présents
   - Professeurs présents
   - PC disponibles
   - PC occupés
   - Sessions actives
3. Le système affiche la liste des personnes présentes
4. Le système affiche la liste des sessions actives
5. Le système affiche les réservations du jour

**Postconditions :**
- L'agent voit les statistiques en temps réel

---

### UC-020 : Consulter le Dashboard Administrateur

**Acteur :** Administrateur

**Objectif :** Consulter le dashboard avec les statistiques globales

**Préconditions :**
- L'administrateur est connecté

**Scénario Principal :**
1. L'administrateur accède au dashboard
2. Le système affiche les statistiques globales
3. Le système affiche des graphiques d'utilisation
4. Le système affiche des tendances
5. Le système affiche des rapports détaillés

**Postconditions :**
- L'administrateur voit les statistiques globales

---

## 2. Pages du Système

### 2.1 Pages d'Authentification

#### Page : Login
- **Objectif :** Permettre la connexion des utilisateurs
- **Utilisateurs autorisés :** Public (avant connexion)
- **Informations affichées :** Formulaire de connexion (identifiant, mot de passe)
- **Actions possibles :** Se connecter
- **États possibles :** Formulaire vide, erreur de connexion, succès
- **Règles métier :** Validation des identifiants, création de session

### 2.2 Pages Agent

#### Page : Dashboard Agent
- **Objectif :** Afficher les statistiques en temps réel
- **Utilisateurs autorisés :** Agent
- **Informations affichées :** Statistiques, personnes présentes, sessions actives, réservations du jour
- **Actions possibles :** Navigation vers les autres pages
- **États possibles :** Données chargées, chargement, erreur
- **Règles métier :** Mise à jour en temps réel

#### Page : Scanner
- **Objectif :** Scanner les cartes QR Code
- **Utilisateurs autorisés :** Agent
- **Informations affichées :** Interface de scan, informations de la personne scannée
- **Actions possibles :** Scanner, attribuer un poste, sélectionner PC privé
- **États possibles :** En attente de scan, personne identifiée, erreur
- **Règles métier :** Validation du QR Code, création/terminaison de session

#### Page : Session Active
- **Objectif :** Afficher les détails d'une session en cours
- **Utilisateurs autorisés :** Agent
- **Informations affichées :** Détails de la session, informations de la personne, poste attribué
- **Actions possibles :** Terminer la session manuellement
- **États possibles :** Session active, session terminée
- **Règles métier :** Une seule session active par personne

#### Page : Personnes Présentes
- **Objectif :** Afficher la liste des personnes présentes
- **Utilisateurs autorisés :** Agent, Administrateur
- **Informations affichées :** Liste des personnes avec session active
- **Actions possibles :** Filtrer, rechercher
- **États possibles :** Liste chargée, liste vide, erreur
- **Règles métier :** Afficher uniquement les sessions actives

#### Page : Ordinateurs
- **Objectif :** Afficher l'état des ordinateurs
- **Utilisateurs autorisés :** Agent, Administrateur
- **Informations affichées :** Liste des ordinateurs avec leur état
- **Actions possibles :** Filtrer par état, filtrer par salle
- **États possibles :** Liste chargée, liste vide, erreur
- **Règles métier :** États : available, occupied, maintenance, out_of_service

#### Page : Historique
- **Objectif :** Afficher l'historique des sessions
- **Utilisateurs autorisés :** Agent, Administrateur
- **Informations affichées :** Liste des sessions terminées
- **Actions possibles :** Filtrer, rechercher, exporter
- **États possibles :** Liste chargée, liste vide, erreur
- **Règles métier :** Afficher uniquement les sessions terminées

#### Page : Réservations
- **Objectif :** Afficher les réservations
- **Utilisateurs autorisés :** Agent, Administrateur
- **Informations affichées :** Liste des réservations
- **Actions possibles :** Filtrer, rechercher, créer une réservation
- **États possibles :** Liste chargée, liste vide, erreur
- **Règles métier :** Vérification des conflits

### 2.3 Pages Administration

#### Page : Dashboard Administrateur
- **Objectif :** Afficher les statistiques globales
- **Utilisateurs autorisés :** Administrateur
- **Informations affichées :** Statistiques globales, graphiques, tendances, rapports
- **Actions possibles :** Navigation vers les autres pages
- **États possibles :** Données chargées, chargement, erreur
- **Règles métier :** Agrégation des données

#### Page : Étudiants
- **Objectif :** Gérer les étudiants
- **Utilisateurs autorisés :** Administrateur
- **Informations affichées :** Liste des étudiants
- **Actions possibles :** Créer, modifier, supprimer, rechercher, filtrer
- **États possibles :** Liste chargée, liste vide, erreur
- **Règles métier :** Validation des informations, unicité du matricule

#### Page : Professeurs
- **Objectif :** Gérer les professeurs
- **Utilisateurs autorisés :** Administrateur
- **Informations affichées :** Liste des professeurs
- **Actions possibles :** Créer, modifier, supprimer, rechercher, filtrer
- **États possibles :** Liste chargée, liste vide, erreur
- **Règles métier :** Validation des informations, unicité du matricule

#### Page : Agents
- **Objectif :** Gérer les agents
- **Utilisateurs autorisés :** Administrateur
- **Informations affichées :** Liste des agents
- **Actions possibles :** Créer, modifier, supprimer, rechercher, filtrer
- **États possibles :** Liste chargée, liste vide, erreur
- **Règles métier :** Validation des informations, unicité de l'identifiant

#### Page : Facultés
- **Objectif :** Gérer les facultés
- **Utilisateurs autorisés :** Administrateur
- **Informations affichées :** Liste des facultés
- **Actions possibles :** Créer, modifier, supprimer
- **États possibles :** Liste chargée, liste vide, erreur
- **Règles métier :** Validation des informations

#### Page : Promotions
- **Objectif :** Gérer les promotions
- **Utilisateurs autorisés :** Administrateur
- **Informations affichées :** Liste des promotions
- **Actions possibles :** Créer, modifier, supprimer
- **États possibles :** Liste chargée, liste vide, erreur
- **Règles métier :** Validation des informations, association avec une faculté

#### Page : Cartes
- **Objectif :** Gérer les cartes
- **Utilisateurs autorisés :** Administrateur
- **Informations affichées :** Liste des cartes
- **Actions possibles :** Créer, modifier, supprimer, bloquer, débloquer
- **États possibles :** Liste chargée, liste vide, erreur
- **Règles métier :** Génération d'identifiant unique, association avec une personne

#### Page : Ordinateurs
- **Objectif :** Gérer les ordinateurs
- **Utilisateurs autorisés :** Administrateur
- **Informations affichées :** Liste des ordinateurs
- **Actions possibles :** Créer, modifier, supprimer, changer l'état
- **États possibles :** Liste chargée, liste vide, erreur
- **Règles métier :** États : available, occupied, maintenance, out_of_service

#### Page : Salles
- **Objectif :** Gérer les salles
- **Utilisateurs autorisés :** Administrateur
- **Informations affichées :** Liste des salles
- **Actions possibles :** Créer, modifier, supprimer
- **États possibles :** Liste chargée, liste vide, erreur
- **Règles métier :** Types : laboratoire, auditoire

#### Page : Réservations
- **Objectif :** Gérer les réservations
- **Utilisateurs autorisés :** Administrateur
- **Informations affichées :** Liste des réservations
- **Actions possibles :** Créer, modifier, supprimer, confirmer, annuler
- **États possibles :** Liste chargée, liste vide, erreur
- **Règles métier :** Vérification des conflits, États : pending, confirmed, cancelled, completed

#### Page : Sessions
- **Objectif :** Gérer les sessions
- **Utilisateurs autorisés :** Administrateur
- **Informations affichées :** Liste des sessions
- **Actions possibles :** Consulter, filtrer, exporter
- **États possibles :** Liste chargée, liste vide, erreur
- **Règles métier :** États : active, completed, cancelled

#### Page : Historique
- **Objectif :** Consulter l'historique
- **Utilisateurs autorisés :** Administrateur
- **Informations affichées :** Historique des sessions
- **Actions possibles :** Filtrer, rechercher, exporter
- **États possibles :** Liste chargée, liste vide, erreur
- **Règles métier :** Conservation complète des données

#### Page : Paramètres
- **Objectif :** Configurer le système
- **Utilisateurs autorisés :** Administrateur
- **Informations affichées :** Paramètres du système
- **Actions possibles :** Modifier les paramètres
- **États possibles :** Paramètres chargés, erreur
- **Règles métier :** Validation des paramètres

## 3. Conclusion

Ce document définit les cas d'utilisation et les pages du système LabAccess. Il servira de référence pour le développement et la validation des fonctionnalités.
