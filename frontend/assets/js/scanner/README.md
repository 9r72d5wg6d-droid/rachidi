# Module Scanner QR - LabAccess

## Structure

```
scanner/
├── scanner.js          # Interface abstraite du scanner
├── camera.js           # Implémentation caméra (WebRTC)
├── usb.js              # Implémentation scanner USB
├── validator.js        # Validation des QR Codes
└── workflow.js         # Workflow de scan
```

## Interface Abstraite

```javascript
interface QRScanner {
  scan(): Promise<string>;  // Retourne l'identifiant QR
  stop(): void;             // Arrête le scanner
  onError(callback): void;  // Gestion des erreurs
}
```

## Implémentations

### Caméra (camera.js)
- Utiliser WebRTC pour accéder à la caméra
- Utiliser une librairie QR (html5-qrcode, jsQR)
- Gérer les permissions caméra
- Afficher le flux vidéo

### Scanner USB (usb.js)
- Écouter les événements clavier (scanners USB émulent un clavier)
- Filtrer les entrées pour détecter les scans
- Gérer les timeouts

### Validation (validator.js)
- Valider le format : `LAB-{TYPE}-{ANNÉE}-{NUMÉRO}`
- Vérifier l'unicité (via API)
- Vérifier le statut de la carte (via API)

### Workflow (workflow.js)
```
DÉMARRAGE → ATTENTE → QR DÉTECTÉ → VALIDATION → ENVOI API → AFFICHAGE
```

## Technologies

- **Librairies QR :**
  - html5-qrcode (recommandé)
  - jsQR
  - Instascan

## Instructions

1. L'interface doit être implémentée par toutes les implémentations
2. Gérer les erreurs de manière élégante
3. Logger tous les scans (succès et échecs)
4. Respecter le workflow défini dans `docs/workflows.md`

## Points d'entrée

- `scanner.js` - Interface principale
- `workflow.js` - Workflow de scan
