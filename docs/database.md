# Base de Données - LabAccess

## 1. Vue d'Ensemble

La base de données de LabAccess stocke toutes les informations nécessaires au fonctionnement du système : utilisateurs, cartes, salles, ordinateurs, sessions, réservations, etc.

## 2. Entités

### 2.1 users

**Objectif :** Stocker les informations de base des utilisateurs du système.

**Attributs :**
- `id` (PK) : Identifiant unique
- `email` : Adresse email (unique)
- `password` : Mot de passe haché
- `role` : Rôle (admin, agent)
- `created_at` : Date de création
- `updated_at` : Date de dernière mise à jour

**Relations :**
- Un agent est un utilisateur avec le rôle "agent"

**Contraintes :**
- `email` unique
- `password` obligatoire
- `role` obligatoire

**Règles métier :**
- Un utilisateur ne peut avoir qu'un seul rôle
- Le mot de passe doit être haché

---

### 2.2 students

**Objectif :** Stocker les informations des étudiants.

**Attributs :**
- `id` (PK) : Identifiant unique
- `user_id` (FK) : Référence vers users (nullable, si l'étudiant a un compte)
- `first_name` : Prénom
- `last_name` : Nom
- `post_name` : Postnom
- `matricule` : Matricule (unique)
- `faculty_id` (FK) : Référence vers faculties
- `promotion_id` (FK) : Référence vers promotions
- `photo_url` : URL de la photo
- `card_id` (FK) : Référence vers cards
- `created_at` : Date de création
- `updated_at` : Date de dernière mise à jour

**Relations :**
- Un étudiant appartient à une faculté
- Un étudiant appartient à une promotion
- Un étudiant peut avoir une carte
- Un étudiant peut avoir plusieurs sessions

**Contraintes :**
- `matricule` unique
- `faculty_id` obligatoire
- `promotion_id` obligatoire

**Règles métier :**
- Un étudiant ne peut avoir qu'une seule carte active

---

### 2.3 professors

**Objectif :** Stocker les informations des professeurs.

**Attributs :**
- `id` (PK) : Identifiant unique
- `user_id` (FK) : Référence vers users (nullable, si le professeur a un compte)
- `first_name` : Prénom
- `last_name` : Nom
- `post_name` : Postnom
- `matricule` : Matricule (unique)
- `department` : Département
- `photo_url` : URL de la photo
- `card_id` (FK) : Référence vers cards
- `created_at` : Date de création
- `updated_at` : Date de dernière mise à jour

**Relations :**
- Un professeur peut avoir une carte
- Un professeur peut avoir plusieurs sessions
- Un professeur peut avoir plusieurs réservations

**Contraintes :**
- `matricule` unique
- `department` obligatoire

**Règles métier :**
- Un professeur ne peut avoir qu'une seule carte active

---

### 2.4 agents

**Objectif :** Stocker les informations des agents.

**Attributs :**
- `id` (PK) : Identifiant unique
- `user_id` (FK) : Référence vers users
- `first_name` : Prénom
- `last_name` : Nom
- `post_name` : Postnom
- `identifier` : Identifiant unique
- `created_at` : Date de création
- `updated_at` : Date de dernière mise à jour

**Relations :**
- Un agent est un utilisateur
- Un agent peut enregistrer plusieurs sessions

**Contraintes :**
- `user_id` unique
- `identifier` unique

**Règles métier :**
- Un agent doit avoir un compte utilisateur

---

### 2.5 faculties

**Objectif :** Stocker les informations des facultés.

**Attributs :**
- `id` (PK) : Identifiant unique
- `name` : Nom de la faculté
- `description` : Description
- `created_at` : Date de création
- `updated_at` : Date de dernière mise à jour

**Relations :**
- Une faculté a plusieurs étudiants
- Une faculté a plusieurs promotions

**Contraintes :**
- `name` unique

---

### 2.6 promotions

**Objectif :** Stocker les informations des promotions.

**Attributs :**
- `id` (PK) : Identifiant unique
- `name` : Nom de la promotion
- `year` : Année
- `faculty_id` (FK) : Référence vers faculties
- `created_at` : Date de création
- `updated_at` : Date de dernière mise à jour

**Relations :**
- Une promotion appartient à une faculté
- Une promotion a plusieurs étudiants

**Contraintes :**
- `faculty_id` obligatoire

---

### 2.7 cards

**Objectif :** Stocker les informations des cartes.

**Attributs :**
- `id` (PK) : Identifiant unique
- `qr_identifier` : Identifiant QR unique
- `type` : Type (student, professor)
- `status` : Statut (active, inactive, blocked)
- `student_id` (FK) : Référence vers students (nullable)
- `professor_id` (FK) : Référence vers professors (nullable)
- `issued_at` : Date d'émission
- `expires_at` : Date d'expiration (nullable)
- `created_at` : Date de création
- `updated_at` : Date de dernière mise à jour

**Relations :**
- Une carte peut être associée à un étudiant
- Une carte peut être associée à un professeur

**Contraintes :**
- `qr_identifier` unique
- Soit `student_id` soit `professor_id` doit être défini
- `type` obligatoire
- `status` obligatoire

**Règles métier :**
- L'identifiant QR doit être généré automatiquement
- Une carte ne peut être associée qu'à une seule personne
- Une carte inactive ou bloquée ne permet pas l'accès

---

### 2.8 rooms

**Objectif :** Stocker les informations des salles.

**Attributs :**
- `id` (PK) : Identifiant unique
- `name` : Nom de la salle
- `type` : Type (laboratory, auditorium)
- `capacity` : Capacité
- `created_at` : Date de création
- `updated_at` : Date de dernière mise à jour

**Relations :**
- Une salle a plusieurs ordinateurs (si type = laboratory)
- Une salle a plusieurs réservations
- Une salle a plusieurs sessions

**Contraintes :**
- `name` unique
- `type` obligatoire
- `capacity` obligatoire

---

### 2.9 computers

**Objectif :** Stocker les informations des ordinateurs.

**Attributs :**
- `id` (PK) : Identifiant unique
- `identifier` : Identifiant unique
- `number` : Numéro
- `room_id` (FK) : Référence vers rooms
- `status` : Statut (available, occupied, maintenance, out_of_service)
- `created_at` : Date de création
- `updated_at` : Date de dernière mise à jour

**Relations :**
- Un ordinateur appartient à une salle
- Un ordinateur peut avoir plusieurs attributions

**Contraintes :**
- `identifier` unique
- `room_id` obligatoire
- `status` obligatoire

**Règles métier :**
- Un ordinateur en maintenance ne peut pas être attribué
- Un ordinateur hors service ne peut pas être attribué
- Un ordinateur occupé ne peut pas être attribué

---

### 2.10 sessions

**Objectif :** Stocker les informations des sessions d'entrée/sortie.

**Attributs :**
- `id` (PK) : Identifiant unique
- `student_id` (FK) : Référence vers students (nullable)
- `professor_id` (FK) : Référence vers professors (nullable)
- `room_id` (FK) : Référence vers rooms
- `entry_agent_id` (FK) : Référence vers agents
- `exit_agent_id` (FK) : Référence vers agents (nullable)
- `entry_time` : Heure d'entrée
- `exit_time` : Heure de sortie (nullable)
- `computer_type` : Type de poste (lab, private)
- `status` : Statut (active, completed, cancelled)
- `created_at` : Date de création
- `updated_at` : Date de dernière mise à jour

**Relations :**
- Une session appartient à un étudiant ou un professeur
- Une session appartient à une salle
- Une session est enregistrée par un agent à l'entrée
- Une session est enregistrée par un agent à la sortie
- Une session peut avoir une attribution d'ordinateur

**Contraintes :**
- Soit `student_id` soit `professor_id` doit être défini
- `room_id` obligatoire
- `entry_agent_id` obligatoire
- `entry_time` obligatoire
- `computer_type` obligatoire
- `status` obligatoire

**Règles métier :**
- Une personne ne peut pas avoir deux sessions actives simultanément dans la même salle
- Le deuxième scan d'une personne ayant une session active est interprété comme une sortie
- Une session terminée doit enregistrer une heure de sortie

---

### 2.11 computer_assignments

**Objectif :** Stocker les attributions d'ordinateurs aux sessions.

**Attributs :**
- `id` (PK) : Identifiant unique
- `session_id` (FK) : Référence vers sessions
- `computer_id` (FK) : Référence vers computers
- `assigned_at` : Heure d'attribution
- `released_at` : Heure de libération (nullable)
- `created_at` : Date de création
- `updated_at` : Date de dernière mise à jour

**Relations :**
- Une attribution appartient à une session
- Une attribution appartient à un ordinateur

**Contraintes :**
- `session_id` unique
- `computer_id` obligatoire
- `assigned_at` obligatoire

**Règles métier :**
- Lorsqu'un PC est attribué, son statut devient occupé
- Lorsqu'une session utilisant un PC se termine, le PC redevient disponible
- Un PC privé ne change pas le statut des ordinateurs du laboratoire

---

### 2.12 reservations

**Objectif :** Stocker les informations des réservations.

**Attributs :**
- `id` (PK) : Identifiant unique
- `professor_id` (FK) : Référence vers professors
- `room_id` (FK) : Référence vers rooms
- `date` : Date de la réservation
- `start_time` : Heure de début
- `end_time` : Heure de fin
- `reason` : Motif
- `status` : Statut (pending, confirmed, cancelled, completed)
- `created_at` : Date de création
- `updated_at` : Date de dernière mise à jour

**Relations :**
- Une réservation appartient à un professeur
- Une réservation appartient à une salle

**Contraintes :**
- `professor_id` obligatoire
- `room_id` obligatoire
- `date` obligatoire
- `start_time` obligatoire
- `end_time` obligatoire
- `status` obligatoire

**Règles métier :**
- Deux réservations incompatibles ne peuvent pas exister pour une même salle
- L'heure de fin doit être après l'heure de début

---

### 2.13 access_logs

**Objectif :** Stocker les logs d'accès pour l'audit.

**Attributs :**
- `id` (PK) : Identifiant unique
- `card_id` (FK) : Référence vers cards
- `action` : Action (entry, exit, denied)
- `reason` : Raison (nullable)
- `agent_id` (FK) : Référence vers agents
- `timestamp` : Horodatage
- `created_at` : Date de création

**Relations :**
- Un log appartient à une carte
- Un log appartient à un agent

**Contraintes :**
- `card_id` obligatoire
- `action` obligatoire
- `agent_id` obligatoire
- `timestamp` obligatoire

**Règles métier :**
- Tous les accès doivent être logués
- Les refus d'accès doivent être logués avec la raison

---

## 3. Diagramme Entité-Association

```
┌─────────────┐       ┌─────────────┐
│   users     │       │   agents    │
└──────┬──────┘       └──────┬──────┘
       │                     │
       │ 1                   │ 1
       │                     │
       │ 1                   │ *
       │                     │
┌──────┴──────┐       ┌──────┴──────┐
│   agents    │       │   users     │
└─────────────┘       └─────────────┘

┌─────────────┐       ┌─────────────┐
│  students   │       │ faculties   │
└──────┬──────┘       └──────┬──────┘
       │                     │
       │ *                   │ 1
       │                     │
       │ 1                   │ *
       │                     │
┌──────┴──────┐       ┌──────┴──────┐
│ faculties   │       │  students   │
└──────┬──────┘       └─────────────┘
       │
       │ 1
       │
       │ *
┌──────┴──────┐
│ promotions  │
└─────────────┘

┌─────────────┐       ┌─────────────┐
│  students   │       │   cards     │
└──────┬──────┘       └──────┬──────┘
       │ *                   │ 1
       │                     │
       │ 1                   │ *
       │                     │
┌──────┴──────┐       ┌──────┴──────┐
│   cards     │       │  students   │
└─────────────┘       └─────────────┘

┌─────────────┐       ┌─────────────┐
│ professors  │       │   cards     │
└──────┬──────┘       └──────┬──────┘
       │ *                   │ 1
       │                     │
       │ 1                   │ *
       │                     │
┌──────┴──────┐       ┌──────┴──────┐
│   cards     │       │ professors  │
└─────────────┘       └─────────────┘

┌─────────────┐       ┌─────────────┐
│   rooms     │       │ computers   │
└──────┬──────┘       └──────┬──────┘
       │ 1                   │ *
       │                     │
       │ *                   │ 1
       │                     │
┌──────┴──────┐       ┌──────┴──────┐
│ computers   │       │   rooms     │
└─────────────┘       └─────────────┘

┌─────────────┐       ┌─────────────┐
│  students   │       │  sessions   │
└──────┬──────┘       └──────┬──────┘
       │ *                   │ 1
       │                     │
       │ 1                   │ *
       │                     │
┌──────┴──────┐       ┌──────┴──────┐
│  sessions   │       │  students   │
└─────────────┘       └─────────────┘

┌─────────────┐       ┌─────────────┐
│ professors  │       │  sessions   │
└──────┬──────┘       └──────┬──────┘
       │ *                   │ 1
       │                     │
       │ 1                   │ *
       │                     │
┌──────┴──────┐       ┌──────┴──────┐
│  sessions   │       │ professors  │
└─────────────┘       └─────────────┘

┌─────────────┐       ┌─────────────┐
│   rooms     │       │  sessions   │
└──────┬──────┘       └──────┬──────┘
       │ 1                   │ *
       │                     │
       │ *                   │ 1
       │                     │
┌──────┴──────┐       ┌──────┴──────┐
│  sessions   │       │   rooms     │
└─────────────┘       └─────────────┘

┌─────────────┐       ┌─────────────┐
│  sessions   │       │computer_    │
└──────┬──────┘       │ assignments │
       │ 1           └──────┬──────┘
       │                     │
       │ *                   │ 1
       │                     │
┌──────┴──────┐       ┌──────┴──────┐
│computer_    │       │  sessions   │
│ assignments │       └─────────────┘
└──────┬──────┘
       │
       │ *
       │
       │ 1
┌──────┴──────┐
│ computers   │
└─────────────┘

┌─────────────┐       ┌─────────────┐
│ professors  │       │reservations │
└──────┬──────┘       └──────┬──────┘
       │ *                   │ 1
       │                     │
       │ 1                   │ *
       │                     │
┌──────┴──────┐       ┌──────┴──────┐
│reservations │       │ professors  │
└─────────────┘       └─────────────┘

┌─────────────┐       ┌─────────────┐
│   rooms     │       │reservations │
└──────┬──────┘       └──────┬──────┘
       │ 1                   │ *
       │                     │
       │ *                   │ 1
       │                     │
┌──────┴──────┐       ┌──────┴──────┐
│reservations │       │   rooms     │
└─────────────┘       └─────────────┘
```

## 4. Index

Pour optimiser les performances, les index suivants sont recommandés :

### cards
- `qr_identifier` (unique)
- `student_id`
- `professor_id`
- `status`

### students
- `matricule` (unique)
- `faculty_id`
- `promotion_id`
- `card_id`

### professors
- `matricule` (unique)
- `card_id`

### sessions
- `student_id`
- `professor_id`
- `room_id`
- `entry_agent_id`
- `status`
- `entry_time`
- `exit_time`

### computer_assignments
- `session_id` (unique)
- `computer_id`
- `assigned_at`

### reservations
- `professor_id`
- `room_id`
- `date`
- `status`

### access_logs
- `card_id`
- `agent_id`
- `timestamp`
- `action`

## 5. Contraintes d'Intégrité

### 5.1 Contraintes de Clé Étrangère

Toutes les clés étrangères doivent respecter l'intégrité référentielle :
- ON DELETE RESTRICT (par défaut)
- ON UPDATE CASCADE

### 5.2 Contraintes de Check

- `sessions.exit_time` > `sessions.entry_time`
- `reservations.end_time` > `reservations.start_time`
- `computers.status` IN ('available', 'occupied', 'maintenance', 'out_of_service')
- `cards.status` IN ('active', 'inactive', 'blocked')
- `sessions.status` IN ('active', 'completed', 'cancelled')
- `reservations.status` IN ('pending', 'confirmed', 'cancelled', 'completed')

## 6. Procédures Stockées (Suggérées)

### 6.1 Création de Session

Procédure pour créer une session avec attribution de poste.

### 6.2 Terminaison de Session

Procédure pour terminer une session et libérer le poste.

### 6.3 Vérification de Conflit de Réservation

Procédure pour vérifier si une réservation est en conflit avec d'autres.

## 7. Triggers (Suggérés)

### 7.1 Mise à jour du Statut d'Ordinateur

Trigger pour mettre à jour automatiquement le statut d'un ordinateur lors de l'attribution ou de la libération.

### 7.2 Log des Accès

Trigger pour créer automatiquement un log d'accès lors de la création ou de la terminaison d'une session.

## 8. Conclusion

Cette structure de base de données est conçue pour supporter toutes les fonctionnalités de LabAccess. Elle est normalisée, optimisée et respecte les règles métier définies dans le projet.
