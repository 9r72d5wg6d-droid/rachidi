// Scanner QR - Workflow de Scan

/**
 * Workflow de scan QR Code pour LabAccess
 */
class ScanWorkflow {
  constructor(scannerType = 'camera') {
    this.scanner = null;
    this.scannerType = scannerType;
    this.isScanning = false;
    this.currentStep = 'idle';
  }

  /**
   * Démarre le workflow de scan
   * @param {HTMLElement} videoElement - Élément vidéo pour la caméra
   * @returns {Promise<Object>} Résultat du scan
   */
  async start(videoElement = null) {
    if (this.isScanning) {
      throw new Error("Un scan est déjà en cours");
    }

    this.isScanning = true;
    this.currentStep = 'starting';

    try {
      // Étape 1: Démarrage du scanner
      this.currentStep = 'scanner_start';
      this.scanner = ScannerFactory.create(this.scannerType);
      
      // Étape 2: Attente de scan
      this.currentStep = 'waiting_scan';
      const qrCode = await this.scanner.scan(videoElement);
      
      // Étape 3: Validation du format
      this.currentStep = 'validating_format';
      const formatValidation = QRValidator.validateFormat(qrCode);
      
      if (!formatValidation.isValid) {
        return {
          success: false,
          step: 'format_validation',
          error: formatValidation.error,
          qrCode: qrCode
        };
      }
      
      // Étape 4: Validation de l'existence
      this.currentStep = 'validating_existence';
      const existenceValidation = await QRValidator.validateExistence(qrCode);
      
      if (!existenceValidation.isValid) {
        return {
          success: false,
          step: 'existence_validation',
          error: existenceValidation.error,
          qrCode: qrCode
        };
      }
      
      // Étape 5: Validation du statut
      this.currentStep = 'validating_status';
      const statusValidation = QRValidator.validateCardStatus(existenceValidation.card);
      
      if (!statusValidation.isValid) {
        return {
          success: false,
          step: 'status_validation',
          error: statusValidation.error,
          qrCode: qrCode,
          card: existenceValidation.card
        };
      }
      
      // Étape 6: Envoi au backend pour traitement
      this.currentStep = 'sending_backend';
      const backendResponse = await this.sendToBackend(qrCode);
      
      // Étape 7: Succès
      this.currentStep = 'success';
      return {
        success: true,
        qrCode: qrCode,
        type: formatValidation.type,
        card: existenceValidation.card,
        person: existenceValidation.person,
        session: backendResponse.session,
        action: backendResponse.action
      };
      
    } catch (error) {
      this.currentStep = 'error';
      return {
        success: false,
        step: this.currentStep,
        error: error.message,
        qrCode: null
      };
    } finally {
      this.isScanning = false;
      this.currentStep = 'idle';
    }
  }

  /**
   * Arrête le workflow
   */
  stop() {
    if (this.scanner) {
      this.scanner.stop();
    }
    this.isScanning = false;
    this.currentStep = 'idle';
  }

  /**
   * Envoie le QR Code au backend pour traitement
   * @param {string} qrCode - Identifiant QR Code
   * @returns {Promise<Object>} Réponse du backend
   */
  async sendToBackend(qrCode) {
    try {
      const response = await fetch('/api/sessions/scan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ qrCode })
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Erreur backend');
      }
      
      return data;
      
    } catch (error) {
      throw new Error(`Erreur backend: ${error.message}`);
    }
  }

  /**
   * Obtient l'état actuel du workflow
   * @returns {Object} État du workflow
   */
  getState() {
    return {
      isScanning: this.isScanning,
      currentStep: this.currentStep,
      scannerType: this.scannerType
    };
  }
}

// Exporter pour utilisation
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ScanWorkflow;
} else {
  window.ScanWorkflow = ScanWorkflow;
}
