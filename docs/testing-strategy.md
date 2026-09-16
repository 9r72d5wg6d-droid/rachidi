# Stratégie de Tests - LabAccess

## 1. Vue d'Ensemble

Ce document définit la stratégie de tests pour LabAccess. L'objectif est de garantir la qualité, la fiabilité et la performance du système.

## 2. Objectifs de Tests

- Garantir que toutes les fonctionnalités fonctionnent conformément aux spécifications
- Détecter et corriger les bugs tôt dans le cycle de développement
- Assurer que les règles métier sont respectées
- Valider la performance du système
- Vérifier la sécurité du système
- Assurer l'accessibilité de l'interface

## 3. Types de Tests

### 3.1 Tests Unitaires

**Objectif :** Tester les fonctions et modules individuels isolément.

**Outils :** À déterminer selon le langage choisi (Jest, Mocha, PHPUnit, pytest, etc.)

**Couverture :** > 80%

**Exemples de tests unitaires :**
- Validation du format d'identifiant QR
- Génération d'identifiant QR unique
- Calcul de la durée d'une session
- Validation des champs obligatoires
- Hachage des mots de passe

**Fréquence :** À chaque commit

---

### 3.2 Tests d'Intégration

**Objectif :** Tester les interactions entre les modules.

**Outils :** À déterminer selon le langage choisi

**Couverture :** > 70%

**Exemples de tests d'intégration :**
- Création d'une session avec attribution de PC
- Terminaison d'une session avec libération de PC
- Création d'une réservation avec vérification de conflit
- Workflow complet d'entrée/sortie
- Intégration du scanner QR avec le backend

**Fréquence :** À chaque pull request

---

### 3.3 Tests End-to-End (E2E)

**Objectif :** Tester les flux complets du point de vue de l'utilisateur.

**Outils :** Playwright, Cypress, Selenium

**Couverture :** Tous les cas d'utilisation critiques

**Exemples de tests E2E :**
- Workflow complet d'entrée d'un étudiant
- Workflow complet de sortie d'un étudiant
- Workflow complet de réservation par un professeur
- Workflow complet de création d'un étudiant
- Workflow complet de création d'une carte

**Fréquence :** Avant chaque release

---

### 3.4 Tests de Performance

**Objectif :** Tester la performance du système sous charge.

**Outils :** k6, JMeter, Apache Bench

**Métriques :**
- Temps de réponse < 2 secondes pour les actions courantes
- Support de 100 utilisateurs simultanés
- Support de 1000 scans par jour

**Scénarios :**
- 100 utilisateurs simultanés sur le dashboard
- 100 scans par minute
- 1000 sessions créées par jour

**Fréquence :** Hebdomadaire et avant chaque release

---

### 3.5 Tests de Sécurité

**Objectif :** Tester la sécurité du système.

**Outils :** OWASP ZAP, Burp Suite

**Scénarios :**
- Injection SQL
- XSS (Cross-Site Scripting)
- CSRF (Cross-Site Request Forgery)
- Force brute sur le login
- Tentative d'accès non autorisé
- Validation QR Code falsifié

**Fréquence :** Mensuelle et avant chaque release

---

### 3.6 Tests d'Accessibilité

**Objectif :** Tester l'accessibilité de l'interface.

**Outils :** axe DevTools, WAVE, Lighthouse

**Critères :**
- Conformité WCAG AA
- Contraste suffisant
- Navigation au clavier fonctionnelle
- Compatible avec les lecteurs d'écran

**Fréquence :** À chaque pull request et avant chaque release

---

### 3.7 Tests de Compatibilité

**Objectif :** Tester la compatibilité avec différents navigateurs et appareils.

**Outils :** BrowserStack, Sauce Labs

**Navigateurs :**
- Chrome (dernière version)
- Firefox (dernière version)
- Safari (dernière version)
- Edge (dernière version)

**Appareils :**
- Desktop
- Tablet
- Mobile

**Fréquence :** Avant chaque release

---

## 4. Stratégie par Module

### 4.1 Module Authentification

**Tests Unitaires :**
- Validation des identifiants
- Hachage des mots de passe
- Génération de tokens
- Validation des tokens

**Tests d'Intégration :**
- Login complet
- Logout
- Protection des routes
- Gestion des sessions

**Tests E2E :**
- Workflow de login
- Workflow de logout
- Accès non autorisé

---

### 4.2 Module Gestion des Personnes

**Tests Unitaires :**
- Validation des champs
- Unicité du matricule
- Validation de l'email

**Tests d'Intégration :**
- CRUD étudiant
- CRUD professeur
- CRUD agent
- Association faculté-étudiant
- Association promotion-étudiant

**Tests E2E :**
- Création d'un étudiant complet
- Modification d'un professeur
- Suppression d'un agent

---

### 4.3 Module Cartes et QR

**Tests Unitaires :**
- Génération d'identifiant QR
- Validation du format QR
- Validation du statut de carte

**Tests d'Intégration :**
- CRUD carte
- Association carte-personne
- Désactivation automatique de l'ancienne carte

**Tests E2E :**
- Création d'une carte
- Blocage d'une carte
- Association avec une personne

---

### 4.4 Module Scanner

**Tests Unitaires :**
- Validation du format de l'identifiant scanné
- Parsing de l'identifiant

**Tests d'Intégration :**
- Intégration avec le backend
- Validation QR inconnu
- Validation QR invalide

**Tests E2E :**
- Scan d'une carte valide
- Scan d'une carte inconnue
- Scan d'une carte inactive

---

### 4.5 Module Sessions

**Tests Unitaires :**
- Calcul de la durée
- Validation des heures
- Validation du statut de session

**Tests d'Intégration :**
- Création de session
- Détection de session active
- Terminaison de session
- Logging des accès

**Tests E2E :**
- Workflow d'entrée complet
- Workflow de sortie complet
- Deuxième scan = sortie

---

### 4.6 Module Ordinateurs

**Tests Unitaires :**
- Validation des états
- Validation de la disponibilité

**Tests d'Intégration :**
- CRUD ordinateur
- Attribution de PC
- Libération de PC
- Mise à jour automatique des états

**Tests E2E :**
- Attribution d'un PC
- Libération automatique
- Changement de statut

---

### 4.7 Module Réservations

**Tests Unitaires :**
- Validation des heures
- Validation de la date
- Détection de conflit

**Tests d'Intégration :**
- CRUD réservation
- Vérification des conflits
- Mise à jour des statuts

**Tests E2E :**
- Création d'une réservation
- Détection de conflit
- Annulation d'une réservation

---

### 4.8 Module Dashboards

**Tests Unitaires :**
- Calcul des statistiques
- Agrégation des données

**Tests d'Intégration :**
- Récupération des statistiques
- Mise à jour en temps réel

**Tests E2E :**
- Affichage du dashboard agent
- Affichage du dashboard administrateur
- Mise à jour des statistiques

---

## 5. Environnements de Tests

### 5.1 Environnement de Développement

**Utilisation :** Tests unitaires et tests d'intégration locaux

**Caractéristiques :**
- Base de données locale
- Données de test
- Pas de données de production

---

### 5.2 Environnement de Test (Staging)

**Utilisation :** Tests d'intégration, tests E2E, tests de performance

**Caractéristiques :**
- Base de données de test
- Données de test réalistes
- Configuration proche de la production

---

### 5.3 Environnement de Production

**Utilisation :** Monitoring, tests de smoke

**Caractéristiques :**
- Base de données de production
- Données réelles
- Configuration de production

---

## 6. Données de Test

### 6.1 Jeux de Données

**Étudiants :**
- 50 étudiants avec des matricules différents
- Différentes facultés et promotions
- Certains avec carte active, d'autres sans

**Professeurs :**
- 20 professeurs avec des matricules différents
- Différents départements
- Certains avec carte active, d'autres sans

**Agents :**
- 5 agents avec des identifiants différents

**Cartes :**
- 100 cartes avec différents statuts (active, inactive, blocked)
- Différents types (student, professor)

**Salles :**
- 10 salles (5 laboratoires, 5 auditoires)

**Ordinateurs :**
- 50 ordinateurs répartis dans les laboratoires
- Différents états (available, occupied, maintenance, out_of_service)

**Sessions :**
- 100 sessions terminées
- 10 sessions actives

**Réservations :**
- 50 réservations (confirmed, pending, cancelled, completed)

---

### 6.2 Scénarios de Test

**Scénario 1 : Entrée Normale Étudiant**
- Carte active
- Session active不存在
- PC disponible
- Résultat : Session créée, PC attribué

**Scénario 2 : Sortie Normale Étudiant**
- Session active存在
- PC attribué
- Résultat : Session terminée, PC libéré

**Scénario 3 : Carte Inactive**
- Carte inactive
- Résultat : Accès refusé

**Scénario 4 : Carte Bloquée**
- Carte bloquée
- Résultat : Accès refusé

**Scénario 5 : QR Inconnu**
- Identifiant QR n'existe pas
- Résultat : Accès refusé

**Scénario 6 : QR Invalide**
- Identifiant QR format invalide
- Résultat : Accès refusé

**Scénario 7 : Session Active Déjà Existante**
- Session active存在
- Résultat : Deuxième scan = sortie

**Scénario 8 : PC Non Disponible**
- PC en maintenance ou hors service
- Résultat : PC non attribuable

**Scénario 9 : Conflit de Réservation**
- Réservation chevauche une autre
- Résultat : Réservation refusée

**Scénario 10 : PC Privé**
- Option PC privé sélectionnée
- Résultat : Aucun PC attribué, session marquée private

---

## 7. Automatisation des Tests

### 7.1 CI/CD

**Intégration Continue :**
- Exécution des tests unitaires à chaque commit
- Exécution des tests d'intégration à chaque pull request

**Livraison Continue :**
- Exécution des tests E2E avant chaque déploiement
- Exécution des tests de performance avant chaque release

**Outils :** GitHub Actions, GitLab CI, Jenkins

---

### 7.2 Tests Automatisés

**Tests Unitaires :** 100% automatisés

**Tests d'Intégration :** 100% automatisés

**Tests E2E :** 80% automatisés (20% manuels pour les cas complexes)

**Tests de Performance :** 100% automatisés

**Tests de Sécurité :** 50% automatisés (50% manuels pour les audits)

**Tests d'Accessibilité :** 100% automatisés

**Tests de Compatibilité :** 100% automatisés

---

## 8. Gestion des Bugs

### 8.1 Cycle de Vie d'un Bug

1. **Détection :** Bug découvert lors des tests ou par un utilisateur
2. **Report :** Bug reporté dans GitHub Issues
3. **Triage :** Bug évalué et priorisé
4. **Assignation :** Bug assigné à un développeur
5. **Correction :** Développeur corrige le bug
6. **Test :** Bug testé pour vérifier la correction
7. **Vérification :** Correction vérifiée par l'équipe
8. **Fermeture :** Bug fermé

---

### 8.2 Sévérité des Bugs

**Critique :**
- Système indisponible
- Perte de données
- Faille de sécurité critique
- Action : Correction immédiate

**Majeur :**
- Fonctionnalité principale non fonctionnelle
- Performance dégradée significativement
- Action : Correction dans les 24h

**Mineur :**
- Fonctionnalité secondaire non fonctionnelle
- Problème d'interface mineur
- Action : Correction dans la semaine

**Trivial :**
- Problème cosmétique
- Faute de frappe
- Action : Correction quand possible

---

## 9. Couverture de Tests

### 9.1 Objectifs de Couverture

**Tests Unitaires :** > 80%

**Tests d'Intégration :** > 70%

**Tests E2E :** Tous les cas d'utilisation critiques

**Couverture Globale :** > 75%

---

### 9.2 Mesure de la Couverture

**Outils :** Coverage.py, Istanbul, JaCoCo

**Rapports :**
- Rapport de couverture généré à chaque exécution
- Rapport disponible dans le CI/CD
- Objectif affiché dans le dashboard

---

## 10. Documentation des Tests

### 10.1 Documentation

**Cas de Test :**
- Description
- Préconditions
- Étapes
- Résultat attendu
- Résultat obtenu

**Rapports de Test :**
- Résumé des tests exécutés
- Tests passés
- Tests échoués
- Couverture

---

### 10.2 Stockage

**Cas de Test :** Stockés dans le dépôt Git (dans le dossier `tests/`)

**Rapports de Test :** Stockés dans le CI/CD et accessibles via l'interface

---

## 11. Critères d'Acceptation

### 11.1 Critères Généraux

- Tous les tests unitaires passent
- Tous les tests d'intégration passent
- Tous les tests E2E critiques passent
- La couverture de tests est > 80%
- Aucun bug critique ou majeur
- Performance conforme aux exigences
- Sécurité validée
- Accessibilité validée

---

### 11.2 Critères par Phase

**Phase 0 :** Documentation complète

**Phase 1 :** Authentification fonctionnelle et sécurisée

**Phase 2 :** CRUD personnes fonctionnel

**Phase 3 :** Gestion cartes fonctionnelle

**Phase 4 :** Scanner fonctionnel

**Phase 5 :** Sessions fonctionnelles

**Phase 6 :** Gestion ordinateurs fonctionnelle

**Phase 7 :** Réservations fonctionnelles

**Phase 8 :** Dashboards fonctionnels

**Phase 9 :** Historique fonctionnel

**Phase 10 :** Tests complets

**Phase 11 :** Qualité validée

**Phase 12 :** Release prête

---

## 12. Conclusion

Cette stratégie de tests définit une approche complète pour garantir la qualité de LabAccess. Elle doit être suivie et ajustée selon les besoins du projet.
