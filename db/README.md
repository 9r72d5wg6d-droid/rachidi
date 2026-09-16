# Base de Données - LabAccess

## Structure

```
db/
├── migrations/       # Scripts de migration (création/modification tables)
│   ├── 001_initial_schema.sql
│   ├── 002_add_indexes.sql
│   └── ...
├── seeds/            # Données de test/développement
│   ├── 01_users.sql
│   ├── 02_faculties.sql
│   ├── 03_promotions.sql
│   └── ...
└── schemas/          # Schémas de référence
    ├── schema.sql    # Schéma complet
    └── diagram.png   # Diagramme entité-association
```

## Tables

Voir `docs/database.md` pour la structure complète des tables :

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

## Technologies (à choisir)

- **Option 1 : PostgreSQL** - Recommandé pour les applications relationnelles
- **Option 2 : MySQL / MariaDB** - Alternative populaire
- **Option 3 : SQLite** - Pour le développement/testing
- **Option 4 : MongoDB** - Si une approche NoSQL est préférée

## Instructions

1. Les migrations doivent être idempotentes
2. Les seeds doivent contenir des données de test réalistes
3. Respecter les contraintes et relations définies dans `docs/database.md`
4. Implémenter les index pour optimiser les performances

## Points d'entrée

- `migrations/001_initial_schema.sql` - Schéma initial
- `seeds/` - Données de test
