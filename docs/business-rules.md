# Règles Métier - LabAccess

## 1. Vue d'Ensemble

Ce document définit toutes les règles métier de LabAccess. Ces règles doivent être strictement respectées lors du développement et des tests.

## 2. Règles de Gestion des Cartes

### Règle 1 : Carte Inactive ou Bloquée

**Énoncé :** Une carte inactive ou bloquée ne permet pas l'accès au laboratoire.

**Description :**
- Lors du scan d'une carte, le système doit vérifier son statut
- Si le statut est "inactive", l'accès est refusé
- Si le statut est "blocked", l'accès est refusé
- Seul le statut "active" autorise l'accès

**Action :** Refuser l'entrée et afficher un message explicite

**Exception :** Aucune

---

### Règle 2 : Unicité de Carte par Personne

**Énoncé :** Une personne ne peut avoir qu'une seule carte active à la fois.

**Description :**
- Un étudiant ne peut avoir qu'une seule carte active
- Un professeur ne peut avoir qu'une seule carte active
- Si une nouvelle carte est créée pour une personne ayant déjà une carte active, l'ancienne carte doit être désactivée automatiquement

**Action :** Désactiver l'ancienne carte avant d'activer la nouvelle

**Exception :** Aucune

---

### Règle 3 : Identifiant QR Unique

**Énoncé :** Chaque carte doit avoir un identifiant QR unique.

**Description :**
- L'identifiant QR doit être généré automatiquement
- L'identifiant QR doit être unique dans toute la base de données
- Le format de l'identifiant est : `LAB-{TYPE}-{ANNÉE}-{NUMÉRO}`
  - TYPE : STU (étudiant) ou PRF (professeur)
  - ANNÉE : Année de création
  - NUMÉRO : Numéro séquentiel sur 5 chiffres

**Action :** Générer un identifiant unique à la création de la carte

**Exception :** Aucune

---

## 3. Règles de Gestion des Sessions

### Règle 4 : Unicité de Session Active

**Énoncé :** Une personne ne peut pas avoir deux sessions actives simultanément dans la même salle.

**Description :**
- Lors du scan d'une carte, le système doit vérifier si la personne a une session active
- Si une session active existe dans la même salle, le deuxième scan est interprété comme une sortie
- Si une session active existe dans une autre salle, le système doit afficher un avertissement

**Action :** Interpréter le deuxième scan comme une sortie ou afficher un avertissement

**Exception :** Aucune

---

### Règle 5 : Deuxième Scan = Sortie

**Énoncé :** Le deuxième scan d'une personne ayant une session active doit être interprété comme une sortie.

**Description :**
- Lorsqu'une personne avec une session active scanne sa carte
- Le système doit automatiquement terminer la session active
- Le système doit enregistrer l'heure de sortie
- Le système doit libérer le poste attribué (si applicable)

**Action :** Terminer la session active automatiquement

**Exception :** Aucune

---

### Règle 6 : Heure de Sortie Obligatoire

**Énoncé :** Une session terminée doit enregistrer une heure de sortie.

**Description :**
- Lors de la terminaison d'une session, l'heure de sortie doit être enregistrée
- L'heure de sortie ne peut pas être null
- L'heure de sortie doit être postérieure à l'heure d'entrée

**Action :** Enregistrer automatiquement l'heure de sortie lors de la terminaison

**Exception :** Aucune

---

### Règle 7 : Calcul de la Durée

**Énoncé :** La durée d'une session est calculée automatiquement.

**Description :**
- La durée est calculée en soustrayant l'heure d'entrée de l'heure de sortie
- La durée est exprimée en minutes
- La durée ne peut pas être négative

**Action :** Calculer automatiquement la durée à la terminaison de la session

**Exception :** Aucune

---

## 4. Règles de Gestion des Ordinateurs

### Règle 8 : Attribution Change le Statut

**Énoncé :** Lorsqu'un PC est attribué, son statut devient occupé.

**Description :**
- Lors de l'attribution d'un PC à une session
- Le statut du PC doit passer de "available" à "occupied"
- Le changement de statut doit être immédiat

**Action :** Mettre à jour automatiquement le statut du PC

**Exception :** Aucune

---

### Règle 9 : Libération Change le Statut

**Énoncé :** Lorsqu'une session utilisant un PC se termine, le PC redevient disponible.

**Description :**
- Lors de la terminaison d'une session avec un PC attribué
- Le statut du PC doit passer de "occupied" à "available"
- Le changement de statut doit être immédiat

**Action :** Mettre à jour automatiquement le statut du PC

**Exception :** Aucune

---

### Règle 10 : PC en Maintenance

**Énoncé :** Un PC en maintenance ne peut pas être attribué.

**Description :**
- Un PC avec le statut "maintenance" ne peut pas être sélectionné pour attribution
- Le système doit masquer les PC en maintenance de la liste des PC disponibles
- Si un PC passe en maintenance alors qu'il est occupé, la session doit être notifiée

**Action :** Masquer les PC en maintenance de la liste des PC disponibles

**Exception :** Aucune

---

### Règle 11 : PC Hors Service

**Énoncé :** Un PC hors service ne peut pas être attribué.

**Description :**
- Un PC avec le statut "out_of_service" ne peut pas être sélectionné pour attribution
- Le système doit masquer les PC hors service de la liste des PC disponibles
- Si un PC passe hors service alors qu'il est occupé, la session doit être notifiée

**Action :** Masquer les PC hors service de la liste des PC disponibles

**Exception :** Aucune

---

### Règle 12 : PC Occupé

**Énoncé :** Un PC occupé ne peut pas être attribué à une autre session.

**Description :**
- Un PC avec le statut "occupied" ne peut pas être sélectionné pour une nouvelle attribution
- Le système doit masquer les PC occupés de la liste des PC disponibles

**Action :** Masquer les PC occupés de la liste des PC disponibles

**Exception :** Aucune

---

### Règle 13 : PC Privé

**Énoncé :** Un PC privé ne change pas le statut des ordinateurs du laboratoire.

**Description :**
- Lorsqu'une personne sélectionne l'option "PC privé"
- Aucun PC du laboratoire n'est attribué
- Aucun PC du laboratoire ne change de statut
- La session est marquée avec le type de poste "private"

**Action :** Ne pas attribuer de PC et marquer la session comme "private"

**Exception :** Aucune

---

## 5. Règles de Gestion des Réservations

### Règle 14 : Conflit de Réservation

**Énoncé :** Deux réservations incompatibles ne peuvent pas exister pour une même salle.

**Description :**
- Une réservation est en conflit si elle chevauche une autre réservation de la même salle
- Le chevauchement est déterminé par la date et les heures
- Le système doit vérifier les conflits avant de créer une réservation

**Action :** Refuser la réservation en cas de conflit et afficher les détails du conflit

**Exception :** Aucune

---

### Règle 15 : Heure de Fin > Heure de Début

**Énoncé :** L'heure de fin d'une réservation doit être postérieure à l'heure de début.

**Description :**
- Lors de la création d'une réservation, l'heure de fin doit être vérifiée
- L'heure de fin ne peut pas être égale ou antérieure à l'heure de début

**Action :** Refuser la réservation si l'heure de fin n'est pas postérieure à l'heure de début

**Exception :** Aucune

---

### Règle 16 : Statut de Réservation

**Énoncé :** Une réservation peut avoir les statuts suivants : pending, confirmed, cancelled, completed.

**Description :**
- **pending** : Réservation en attente de confirmation
- **confirmed** : Réservation confirmée
- **cancelled** : Réservation annulée
- **completed** : Réservation terminée (la période est passée)

**Action :** Mettre à jour le statut selon le workflow

**Exception :** Aucune

---

## 6. Règles de Gestion des Utilisateurs

### Règle 17 : Unicité du Matricule

**Énoncé :** Le matricule d'un étudiant ou d'un professeur doit être unique.

**Description :**
- Deux étudiants ne peuvent pas avoir le même matricule
- Deux professeurs ne peuvent pas avoir le même matricule
- Un étudiant et un professeur ne peuvent pas avoir le même matricule

**Action :** Refuser la création si le matricule existe déjà

**Exception :** Aucune

---

### Règle 18 : Unicité de l'Identifiant Agent

**Énoncé :** L'identifiant d'un agent doit être unique.

**Description :**
- Deux agents ne peuvent pas avoir le même identifiant

**Action :** Refuser la création si l'identifiant existe déjà

**Exception :** Aucune

---

### Règle 19 : Rôle et Permissions

**Énoncé :** Les permissions sont basées sur le rôle de l'utilisateur.

**Description :**
- **Administrateur** : Toutes les permissions (CRUD sur toutes les entités, accès à tous les dashboards)
- **Agent** : Permissions limitées (scan, attribution, consultation)

**Action :** Vérifier les permissions avant chaque action

**Exception :** Aucune

---

## 7. Règles de Validation QR Code

### Règle 20 : Format de l'Identifiant QR

**Énoncé :** L'identifiant QR doit respecter le format défini.

**Description :**
- Format : `LAB-{TYPE}-{ANNÉE}-{NUMÉRO}`
- TYPE : STU ou PRF
- ANNÉE : 4 chiffres
- NUMÉRO : 5 chiffres

**Action :** Valider le format avant la recherche dans la base de données

**Exception :** Aucune

---

### Règle 21 : QR Inconnu

**Énoncé :** Un QR Code inconnu doit être rejeté.

**Description :**
- Si l'identifiant QR n'existe pas dans la base de données
- Le système doit afficher un message "QR Code inconnu"
- L'accès doit être refusé

**Action :** Afficher un message d'erreur et refuser l'accès

**Exception :** Aucune

---

### Règle 22 : QR Invalide

**Énoncé :** Un QR Code avec un format invalide doit être rejeté.

**Description :**
- Si l'identifiant QR ne respecte pas le format défini
- Le système doit afficher un message "QR Code invalide"
- L'accès doit être refusé

**Action :** Afficher un message d'erreur et refuser l'accès

**Exception :** Aucune

---

## 8. Règles de Gestion des Salles

### Règle 23 : Type de Salle

**Énoncé :** Une salle peut être de type "laboratory" ou "auditorium".

**Description :**
- **laboratory** : Salle avec des ordinateurs
- **auditorium** : Salle de cours sans ordinateurs

**Action :** Définir le type lors de la création de la salle

**Exception :** Aucune

---

### Règle 24 : Capacité de Salle

**Énoncé :** La capacité d'une salle doit être positive.

**Description :**
- La capacité ne peut pas être null
- La capacité ne peut pas être négative
- La capacité ne peut pas être zéro

**Action :** Valider la capacité lors de la création/modification

**Exception :** Aucune

---

## 9. Règles de Gestion des Facultés et Promotions

### Règle 25 : Promotion Appartient à une Faculté

**Énoncé :** Une promotion doit être associée à une faculté.

**Description :**
- Une promotion ne peut pas exister sans faculté associée
- La faculté doit exister dans la base de données

**Action :** Valider l'existence de la faculté lors de la création

**Exception :** Aucune

---

### Règle 26 : Étudiant Appartient à une Faculté et une Promotion

**Énoncé :** Un étudiant doit être associé à une faculté et une promotion.

**Description :**
- Un étudiant ne peut pas exister sans faculté associée
- Un étudiant ne peut pas exister sans promotion associée
- La faculté et la promotion doivent exister dans la base de données

**Action :** Valider l'existence de la faculté et de la promotion lors de la création

**Exception :** Aucune

---

## 10. Règles de Logging et Audit

### Règle 27 : Log des Entrées

**Énoncé :** Toute entrée doit être loguée.

**Description :**
- Lors de la création d'une session, un log doit être créé
- Le log doit contenir : carte, action (entry), agent, timestamp

**Action :** Créer automatiquement un log lors de l'entrée

**Exception :** Aucune

---

### Règle 28 : Log des Sorties

**Énoncé :** Toute sortie doit être loguée.

**Description :**
- Lors de la terminaison d'une session, un log doit être créé
- Le log doit contenir : carte, action (exit), agent, timestamp

**Action :** Créer automatiquement un log lors de la sortie

**Exception :** Aucune

---

### Règle 29 : Log des Refus

**Énoncé :** Tout refus d'accès doit être logué avec la raison.

**Description :**
- Lorsqu'un accès est refusé, un log doit être créé
- Le log doit contenir : carte, action (denied), raison, agent, timestamp

**Action :** Créer automatiquement un log lors du refus

**Exception :** Aucune

---

## 11. Règles de Workflow Professeur

### Règle 30 : Actions Professeur

**Énoncé :** Lorsqu'un professeur est identifié, le système doit proposer des actions spécifiques.

**Description :**
- Option A : Travailler sur un ordinateur du laboratoire
- Option B : Réserver le laboratoire
- Option C : Réserver un auditoire

**Action :** Afficher les options spécifiques aux professeurs

**Exception :** Aucune

---

## 12. Règles de Données

### Règle 31 : Champs Obligatoires

**Énoncé :** Certains champs sont obligatoires pour chaque entité.

**Description :**

**Étudiant :**
- first_name
- last_name
- matricule
- faculty_id
- promotion_id

**Professeur :**
- first_name
- last_name
- matricule
- department

**Agent :**
- first_name
- last_name
- identifier
- user_id

**Carte :**
- qr_identifier
- type
- status

**Salle :**
- name
- type
- capacity

**Ordinateur :**
- identifier
- number
- room_id
- status

**Session :**
- student_id ou professor_id
- room_id
- entry_agent_id
- entry_time
- computer_type
- status

**Réservation :**
- professor_id
- room_id
- date
- start_time
- end_time
- status

**Action :** Valider les champs obligatoires lors de la création/modification

**Exception :** Aucune

---

### Règle 32 : Format des Dates et Heures

**Énoncé :** Les dates et heures doivent respecter un format standard.

**Description :**
- Dates : ISO 8601 (YYYY-MM-DD)
- Heures : ISO 8601 (HH:mm:ss)
- Timestamps : ISO 8601 (YYYY-MM-DDTHH:mm:ssZ)

**Action :** Valider et normaliser les dates et heures

**Exception :** Aucune

---

## 13. Règles de Sécurité

### Règle 33 : Hachage des Mots de Passe

**Énoncé :** Les mots de passe doivent être hachés avant stockage.

**Description :**
- Utiliser un algorithme de hachage robuste (bcrypt, argon2)
- Ne jamais stocker les mots de passe en clair

**Action :** Hacher les mots de passe avant le stockage

**Exception :** Aucune

---

### Règle 34 : Validation Côté Serveur

**Énoncé :** Toutes les validations doivent être effectuées côté serveur.

**Description :**
- Les validations côté client sont pour l'UX uniquement
- Les validations côté serveur sont obligatoires pour la sécurité

**Action :** Implémenter toutes les validations côté serveur

**Exception :** Aucune

---

## 14. Résumé des Règles

| Règle | Catégorie | Énoncé Court |
|-------|-----------|--------------|
| 1 | Cartes | Carte inactive/bloquée = refus |
| 2 | Cartes | Une carte active par personne |
| 3 | Cartes | Identifiant QR unique |
| 4 | Sessions | Une session active par personne/salle |
| 5 | Sessions | Deuxième scan = sortie |
| 6 | Sessions | Heure de sortie obligatoire |
| 7 | Sessions | Calcul automatique de la durée |
| 8 | Ordinateurs | Attribution = statut occupied |
| 9 | Ordinateurs | Libération = statut available |
| 10 | Ordinateurs | PC maintenance = non attribuable |
| 11 | Ordinateurs | PC hors service = non attribuable |
| 12 | Ordinateurs | PC occupé = non attribuable |
| 13 | Ordinateurs | PC privé = pas de changement de statut |
| 14 | Réservations | Pas de conflit de réservation |
| 15 | Réservations | Fin > début |
| 16 | Réservations | Statuts définis |
| 17 | Utilisateurs | Matricule unique |
| 18 | Utilisateurs | Identifiant agent unique |
| 19 | Utilisateurs | Permissions basées sur le rôle |
| 20 | QR Code | Format valide requis |
| 21 | QR Code | QR inconnu = refus |
| 22 | QR Code | QR invalide = refus |
| 23 | Salles | Types définis |
| 24 | Salles | Capacité positive |
| 25 | Facultés/Promotions | Promotion appartient à faculté |
| 26 | Facultés/Promotions | Étudiant appartient à faculté et promotion |
| 27 | Logging | Log des entrées |
| 28 | Logging | Log des sorties |
| 29 | Logging | Log des refus |
| 30 | Professeurs | Actions spécifiques |
| 31 | Données | Champs obligatoires |
| 32 | Données | Format dates/heures standard |
| 33 | Sécurité | Hachage des mots de passe |
| 34 | Sécurité | Validation côté serveur |

## 15. Conclusion

Ces règles métier doivent être strictement respectées lors du développement, des tests et de la maintenance du système LabAccess. Toute dérogation à ces règles doit être documentée et validée.
