// Scanner QR - Implémentation USB

/**
 * Implémentation du scanner QR utilisant un périphérique USB
 * Les scanners USB émulent généralement un clavier
 */
class USBScanner extends QRScanner {
  constructor() {
    super();
    this.isListening = false;
    this.buffer = '';
    this.lastKeyTime = 0;
    this.timeout = null;
    this.errorCallback = null;
    this.successCallback = null;
    this.SCAN_TIMEOUT = 100; // ms entre les touches pour considérer un scan
    this.SCAN_MIN_LENGTH = 10; // Longueur minimale d'un scan
  }

  /**
   * Démarre l'écoute des événements clavier
   * @returns {Promise<string>} Identifiant QR Code scanné
   */
  async scan() {
    this.isListening = true;
    this.buffer = '';
    
    // Ajouter l'écouteur d'événements
    document.addEventListener('keydown', this.handleKeyDown);
    
    return new Promise((resolve, reject) => {
      this.successCallback = (decodedText) => {
        this.stop();
        resolve(decodedText);
      };
      
      this.errorCallback = (error) => {
        this.stop();
        reject(error);
      };
    });
  }

  /**
   * Arrête l'écoute des événements clavier
   */
  stop() {
    this.isListening = false;
    this.buffer = '';
    document.removeEventListener('keydown', this.handleKeyDown);
    
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  /**
   * Gère les événements clavier
   * @param {KeyboardEvent} event - Événement clavier
   */
  handleKeyDown = (event) => {
    if (!this.isListening) return;
    
    const currentTime = Date.now();
    const timeDiff = currentTime - this.lastKeyTime;
    
    // Si le temps entre les touches est trop long, réinitialiser le buffer
    if (timeDiff > this.SCAN_TIMEOUT && this.buffer.length > 0) {
      this.buffer = '';
    }
    
    this.lastKeyTime = currentTime;
    
    // Gérer les touches spéciales
    if (event.key === 'Enter') {
      event.preventDefault();
      
      // Si le buffer a une longueur suffisante, considérer comme un scan
      if (this.buffer.length >= this.SCAN_MIN_LENGTH) {
        const decodedText = this.buffer;
        this.buffer = '';
        
        if (this.successCallback) {
          this.successCallback(decodedText);
        }
      } else {
        // Buffer trop court, ignorer
        this.buffer = '';
      }
      return;
    }
    
    // Ignorer les touches de contrôle
    if (event.key.length > 1) {
      return;
    }
    
    // Ajouter le caractère au buffer
    this.buffer += event.key;
    
    // Réinitialiser le timeout
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    
    this.timeout = setTimeout(() => {
      // Timeout atteint, buffer incomplet
      if (this.buffer.length > 0 && this.buffer.length < this.SCAN_MIN_LENGTH) {
        this.buffer = '';
      }
    }, this.SCAN_TIMEOUT);
  }

  /**
   * Définit le callback pour les erreurs
   * @param {Function} callback - Fonction appelée en cas d'erreur
   */
  onError(callback) {
    this.errorCallback = callback;
  }

  /**
   * Définit le callback pour les scans réussis
   * @param {Function} callback - Fonction appelée lors d'un scan réussi
   */
  onSuccess(callback) {
    this.successCallback = callback;
  }
}

// Exporter pour utilisation
if (typeof module !== 'undefined' && module.exports) {
  module.exports = USBScanner;
} else {
  window.USBScanner = USBScanner;
}
