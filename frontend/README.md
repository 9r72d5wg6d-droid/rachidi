# Frontend - LabAccess

## Structure

```
frontend/
├── assets/
│   ├── css/
│   │   ├── main.css              # Styles globaux
│   │   └── components/           # Styles des composants
│   ├── js/
│   │   ├── main.js               # Point d'entrée principal
│   │   ├── api/                  # Appels API (fetch, axios)
│   │   ├── components/           # Composants réutilisables
│   │   ├── pages/                # Logique spécifique aux pages
│   │   ├── scanner/              # Module scanner QR
│   │   └── utils/                # Fonctions utilitaires
│   └── images/                   # Images statiques
├── pages/
│   ├── auth/
│   │   └── login.html            # Page de connexion
│   ├── agent/                    # Pages pour les agents
│   │   ├── dashboard.html
│   │   ├── scanner.html
│   │   ├── session.html
│   │   ├── people.html
│   │   ├── computers.html
│   │   ├── history.html
│   │   └── reservations.html
│   └── admin/                    # Pages pour les administrateurs
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
└── index.html                    # Page d'accueil
```

## Technologies

- HTML5
- CSS3
- JavaScript (ES6+)
- Librairie QR Code (à choisir : html5-qrcode, jsQR)
- Framework CSS (optionnel : TailwindCSS, Bootstrap)

## Instructions

1. Chaque page HTML doit inclure les fichiers CSS et JS nécessaires
2. Utiliser le design system défini dans `docs/design-system.md`
3. Le module scanner doit être abstrait pour supporter caméra et USB
4. Respecter les conventions de nommage et de structure

## Points d'entrée

- `index.html` - Redirection selon le rôle
- `pages/auth/login.html` - Authentification
- `pages/agent/dashboard.html` - Dashboard agent
- `pages/admin/dashboard.html` - Dashboard admin
