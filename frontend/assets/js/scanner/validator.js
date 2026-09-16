// Scanner QR - Validation des QR Codes

/**
 * Validateur de QR Codes pour LabAccess
 */
class QRValidator {
  /**
   * Valide le format d'un identifiant QR Code
   * Format attendu: LAB-{TYPE}-{ANNÉE}-{NUMÉRO}
   * Exemple: LAB-STU-2026-00015
   * 
   * @param {string} qrCode - Identifiant QR Code à valider
   * @returns {Object} Résultat de la validation
   */
  static validateFormat(qrCode) {
    const result = {
      isValid: false,
      qrCode: qrCode,
      type: null,
      year: null,
      number: null,
      error: null
    };
    
    // Expression régulière pour le format
    const regex = /^LAB-(STU|PRO|AGT)-(\d{4})-(\d{5})$/;
    
    if (!qrCode) {
      result.error = "QR Code vide";
      return result;
    }
    
    const match = qrCode.match(regex);
    
    if (!match) {
      result.error = "Format invalide. Attendu: LAB-{TYPE}-{ANNÉE}-{NUMÉRO}";
      return result;
    }
    
    result.isValid = true;
    result.type = match[1];
    result.year = parseInt(match[2]);
    result.number = parseInt(match[3]);
    
    // Validation supplémentaire de l'année
    const currentYear = new Date().getFullYear();
    if (result.year < currentYear - 5 || result.year > currentYear + 1) {
      result.error = `Année invalide: ${result.year}`;
      result.isValid = false;
      return result;
    }
    
    return result;
  }

  /**
   * Valide l'existence du QR Code via l'API
   * @param {string} qrCode - Identifiant QR Code
   * @returns {Promise<Object>} Résultat de la validation
   */
  static async validateExistence(qrCode) {
    try {
      const response = await fetch(`/api/cards/validate/${qrCode}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        return {
          isValid: false,
          exists: false,
          error: data.message || 'QR Code inconnu'
        };
      }
      
      return {
        isValid: true,
        exists: true,
        card: data.card,
        person: data.person
      };
      
    } catch (error) {
      return {
        isValid: false,
        exists: false,
        error: 'Erreur de connexion à l\'API'
      };
    }
  }

  /**
   * Valide le statut de la carte
   * @param {Object} card - Données de la carte
   * @returns {Object} Résultat de la validation
   */
  static validateCardStatus(card) {
    const result = {
      isValid: true,
      status: card.status,
      error: null
    };
    
    if (!card) {
      result.isValid = false;
      result.error = "Carte non trouvée";
      return result;
    }
    
    if (card.status === 'inactive') {
      result.isValid = false;
      result.error = "Carte inactive";
      return result;
    }
    
    if (card.status === 'blocked') {
      result.isValid = false;
      result.error = "Carte bloquée";
      return result;
    }
    
    if (card.status === 'lost') {
      result.isValid = false;
      result.error = "Carte perdue";
      return result;
    }
    
    return result;
  }

  /**
   * Validation complète (format + existence + statut)
   * @param {string} qrCode - Identifiant QR Code
   * @returns {Promise<Object>} Résultat de la validation complète
   */
  static async validate(qrCode) {
    // 1. Valider le format
    const formatValidation = this.validateFormat(qrCode);
    if (!formatValidation.isValid) {
      return formatValidation;
    }
    
    // 2. Valider l'existence
    const existenceValidation = await this.validateExistence(qrCode);
    if (!existenceValidation.isValid) {
      return existenceValidation;
    }
    
    // 3. Valider le statut
    const statusValidation = this.validateCardStatus(existenceValidation.card);
    if (!statusValidation.isValid) {
      return statusValidation;
    }
    
    // Tout est valide
    return {
      isValid: true,
      qrCode: qrCode,
      type: formatValidation.type,
      card: existenceValidation.card,
      person: existenceValidation.person
    };
  }
}

// Exporter pour utilisation
if (typeof module !== 'undefined' && module.exports) {
  module.exports = QRValidator;
} else {
  window.QRValidator = QRValidator;
}
