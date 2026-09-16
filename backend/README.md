# Backend - LabAccess

## Structure

```
backend/
├── config/           # Configuration de l'application
│   ├── database.js   # Configuration base de données
│   ├── auth.js       # Configuration authentification
│   └── env.js        # Variables d'environnement
├── controllers/      # Contrôleurs API
│   ├── authController.js
│   ├── userController.js
│   ├── cardController.js
│   ├── sessionController.js
│   ├── computerController.js
│   ├── reservationController.js
│   └── dashboardController.js
├── models/           # Modèles de données
│   ├── User.js
│   ├── Student.js
│   ├── Professor.js
│   ├── Agent.js
│   ├── Faculty.js
│   ├── Promotion.js
│   ├── Card.js
│   ├── Room.js
│   ├── Computer.js
│   ├── Session.js
│   ├── ComputerAssignment.js
│   ├── Reservation.js
│   └── AccessLog.js
├── routes/           # Définition des routes API
│   ├── auth.js
│   ├── users.js
│   ├── cards.js
│   ├── sessions.js
│   ├── computers.js
│   ├── reservations.js
│   └── dashboard.js
├── services/         # Logique métier
│   ├── authService.js
│   ├── userService.js
│   ├── cardService.js
│   ├── sessionService.js
│   ├── computerService.js
│   ├── reservationService.js
│   └── qrService.js
├── middleware/       # Middleware Express
│   ├── auth.js       # Vérification auth/permissions
│   ├── errorHandler.js
│   └── logger.js
├── utils/            # Fonctions utilitaires
│   ├── qrGenerator.js
│   ├── passwordHash.js
│   └── validators.js
└── tests/            # Tests backend
    ├── unit/
    ├── integration/
    └── e2e/
```

## Technologies (à choisir)

- **Option 1 : Node.js**
  - Express.js
  - Sequelize ou Mongoose
  - JWT
  - bcrypt

- **Option 2 : Python**
  - Flask ou Django
  - SQLAlchemy
  - JWT
  - bcrypt

- **Option 3 : Java**
  - Spring Boot
  - JPA/Hibernate
  - Spring Security

## Instructions

1. Chaque contrôleur doit gérer les requêtes HTTP
2. La logique métier doit être dans les services
3. Les modèles doivent correspondre à la base de données définie dans `docs/database.md`
4. Respecter les règles métier définies dans `docs/business-rules.md`
5. Implémenter les endpoints RESTful

## Points d'entrée

- `app.js` ou `server.js` - Point d'entrée principal
- `routes/` - Définition des routes API
