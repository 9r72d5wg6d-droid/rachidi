// Scanner QR - Implémentation Caméra (WebRTC)

/**
 * Implémentation du scanner QR utilisant la caméra
 */
class CameraScanner extends QRScanner {
  constructor() {
    super();
    this.videoElement = null;
    this.html5QrCode = null;
    this.isScanning = false;
    this.errorCallback = null;
    this.successCallback = null;
  }

  /**
   * Initialise et démarre le scanner caméra
   * @param {HTMLElement} videoElement - Élément vidéo pour afficher le flux
   * @returns {Promise<string>} Identifiant QR Code scanné
   */
  async scan(videoElement = null) {
    this.videoElement = videoElement;
    
    try {
      // Utiliser html5-qrcode (à installer via npm ou CDN)
      const Html5Qrcode = await this.loadHtml5Qrcode();
      
      this.html5QrCode = new Html5Qrcode("qr-reader");
      
      const config = {
        fps: 10,
        qrbox: { width: 250, height: 250 },
        aspectRatio: 1.0
      };
      
      this.isScanning = true;
      
      await this.html5QrCode.start(
        { facingMode: "environment" },
        config,
        (decodedText) => {
          // Scan réussi
          if (this.successCallback) {
            this.successCallback(decodedText);
          }
        },
        (errorMessage) => {
          // Erreur de scan (normale, ignorer)
          // console.log("Scan error:", errorMessage);
        }
      );
      
      return new Promise((resolve, reject) => {
        this.successCallback = (decodedText) => {
          this.stop();
          resolve(decodedText);
        };
        
        if (this.errorCallback) {
          this.errorCallback = (error) => {
            this.stop();
            reject(error);
          };
        }
      });
      
    } catch (error) {
      if (this.errorCallback) {
        this.errorCallback(error);
      }
      throw error;
    }
  }

  /**
   * Arrête le scanner
   */
  stop() {
    if (this.html5QrCode && this.isScanning) {
      this.html5QrCode.stop();
      this.isScanning = false;
    }
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

  /**
   * Charge la librairie html5-qrcode
   * @returns {Promise} Librairie html5-qrcode
   */
  async loadHtml5Qrcode() {
    // Si la librairie est déjà chargée
    if (typeof Html5Qrcode !== 'undefined') {
      return Html5Qrcode;
    }
    
    // Sinon, charger depuis un CDN
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/html5-qrcode';
      script.onload = () => resolve(Html5Qrcode);
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }
}

// Exporter pour utilisation
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CameraScanner;
} else {
  window.CameraScanner = CameraScanner;
}
