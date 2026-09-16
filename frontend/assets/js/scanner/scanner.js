// Scanner QR - Interface Abstraite

/**
 * Interface abstraite pour le scanner QR Code
 * Cette interface doit être implémentée par tous les types de scanners
 */
class QRScanner {
  constructor() {
    if (new.target === QRScanner) {
      throw new Error("QRScanner est une classe abstraite et ne peut être instanciée directement");
    }
  }

  /**
   * Démarre le scanner
   * @returns {Promise<string>} Identifiant QR Code scanné
   */
  async scan() {
    throw new Error("La méthode scan() doit être implémentée");
  }

  /**
   * Arrête le scanner
   */
  stop() {
    throw new Error("La méthode stop() doit être implémentée");
  }

  /**
   * Définit le callback pour les erreurs
   * @param {Function} callback - Fonction appelée en cas d'erreur
   */
  onError(callback) {
    throw new Error("La méthode onError() doit être implémentée");
  }

  /**
   * Définit le callback pour les scans réussis
   * @param {Function} callback - Fonction appelée lors d'un scan réussi
   */
  onSuccess(callback) {
    throw new Error("La méthode onSuccess() doit être implémentée");
  }
}

/**
 * Factory pour créer le scanner approprié
 */
class ScannerFactory {
  /**
   * Crée une instance de scanner selon le type
   * @param {string} type - Type de scanner ('camera', 'usb')
   * @returns {QRScanner} Instance du scanner
   */
  static create(type) {
    switch (type.toLowerCase()) {
      case 'camera':
        // Import dynamique pour éviter les erreurs si le module n'existe pas encore
        if (typeof CameraScanner !== 'undefined') {
          return new CameraScanner();
        }
        throw new Error("CameraScanner n'est pas implémenté");
      
      case 'usb':
        if (typeof USBScanner !== 'undefined') {
          return new USBScanner();
        }
        throw new Error("USBScanner n'est pas implémenté");
      
      default:
        throw new Error(`Type de scanner inconnu: ${type}`);
    }
  }
}

// Exporter pour utilisation
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QRScanner, ScannerFactory };
} else {
  window.QRScanner = QRScanner;
  window.ScannerFactory = ScannerFactory;
}
