// Contrôleur Auth - LabAccess
// Exemple pour Node.js avec Express

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Student = require('../models/Student');
const Professor = require('../models/Professor');
const Agent = require('../models/Agent');

// Clé secrète JWT (à mettre dans les variables d'environnement)
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '24h';

/**
 * Connexion d'un utilisateur
 */
async function login(req, res) {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email et mot de passe requis'
      });
    }

    // Trouver l'utilisateur
    const user = await User.findByEmail(email);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Identifiants invalides'
      });
    }

    // Vérifier si l'utilisateur est actif
    if (!user.is_active) {
      return res.status(401).json({
        success: false,
        message: 'Compte désactivé'
      });
    }

    // Vérifier le mot de passe
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Identifiants invalides'
      });
    }

    // Générer le token JWT
    const token = jwt.sign(
      { 
        userId: user.id, 
        email: user.email, 
        role: user.role 
      },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    // Récupérer les informations supplémentaires selon le rôle
    let personData = null;
    if (user.role === 'admin') {
      personData = { role: 'admin' };
    } else if (user.role === 'agent') {
      const agent = await Agent.findByUserId(user.id);
      personData = agent;
    }

    // Réponse
    res.json({
      success: true,
      message: 'Connexion réussie',
      data: {
        user: {
          id: user.id,
          email: user.email,
          role: user.role,
          ...personData
        },
        token
      }
    });

  } catch (error) {
    console.error('Erreur login:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur'
    });
  }
}

/**
 * Déconnexion d'un utilisateur
 */
async function logout(req, res) {
  try {
    // Pour JWT, la déconnexion est gérée par le client (suppression du token)
    // On peut ajouter une liste noire de tokens si nécessaire
    
    res.json({
      success: true,
      message: 'Déconnexion réussie'
    });

  } catch (error) {
    console.error('Erreur logout:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur'
    });
  }
}

/**
 * Vérification du token
 */
async function verifyToken(req, res) {
  try {
    // Le middleware a déjà vérifié le token
    const user = req.user;

    res.json({
      success: true,
      data: {
        user: {
          id: user.id,
          email: user.email,
          role: user.role
        }
      }
    });

  } catch (error) {
    console.error('Erreur verifyToken:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur serveur'
    });
  }
}

module.exports = {
  login,
  logout,
  verifyToken
};
