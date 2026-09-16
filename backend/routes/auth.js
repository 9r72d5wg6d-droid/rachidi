// Routes Auth - LabAccess
// Exemple pour Node.js avec Express

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/auth');

/**
 * @route   POST /api/auth/login
 * @desc    Connexion d'un utilisateur
 * @access  Public
 */
router.post('/login', authController.login);

/**
 * @route   POST /api/auth/logout
 * @desc    Déconnexion d'un utilisateur
 * @access  Private
 */
router.post('/logout', authMiddleware, authController.logout);

/**
 * @route   GET /api/auth/verify
 * @desc    Vérification du token
 * @access  Private
 */
router.get('/verify', authMiddleware, authController.verifyToken);

module.exports = router;
