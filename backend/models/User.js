// Modèle User - LabAccess
// Exemple pour Node.js avec PostgreSQL

const db = require('../config/database');

class User {
  /**
   * Crée un nouvel utilisateur
   * @param {Object} userData - Données de l'utilisateur
   * @returns {Promise<Object>} Utilisateur créé
   */
  static async create(userData) {
    const { email, password_hash, role, is_active = true } = userData;
    
    const query = `
      INSERT INTO users (email, password_hash, role, is_active)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;
    
    const values = [email, password_hash, role, is_active];
    const result = await db.query(query, values);
    return result.rows[0];
  }

  /**
   * Trouve un utilisateur par email
   * @param {string} email - Email de l'utilisateur
   * @returns {Promise<Object|null>} Utilisateur ou null
   */
  static async findByEmail(email) {
    const query = 'SELECT * FROM users WHERE email = $1';
    const result = await db.query(query, [email]);
    return result.rows[0] || null;
  }

  /**
   * Trouve un utilisateur par ID
   * @param {number} id - ID de l'utilisateur
   * @returns {Promise<Object|null>} Utilisateur ou null
   */
  static async findById(id) {
    const query = 'SELECT * FROM users WHERE id = $1';
    const result = await db.query(query, [id]);
    return result.rows[0] || null;
  }

  /**
   * Met à jour un utilisateur
   * @param {number} id - ID de l'utilisateur
   * @param {Object} userData - Données à mettre à jour
   * @returns {Promise<Object>} Utilisateur mis à jour
   */
  static async update(id, userData) {
    const { email, password_hash, role, is_active } = userData;
    
    const query = `
      UPDATE users
      SET email = COALESCE($2, email),
          password_hash = COALESCE($3, password_hash),
          role = COALESCE($4, role),
          is_active = COALESCE($5, is_active),
          updated_at = CURRENT_TIMESTAMP
      WHERE id = $1
      RETURNING *
    `;
    
    const values = [id, email, password_hash, role, is_active];
    const result = await db.query(query, values);
    return result.rows[0];
  }

  /**
   * Supprime un utilisateur
   * @param {number} id - ID de l'utilisateur
   * @returns {Promise<boolean>} True si supprimé
   */
  static async delete(id) {
    const query = 'DELETE FROM users WHERE id = $1';
    const result = await db.query(query, [id]);
    return result.rowCount > 0;
  }

  /**
   * Liste tous les utilisateurs
   * @param {Object} filters - Filtres optionnels
   * @returns {Promise<Array>} Liste des utilisateurs
   */
  static async findAll(filters = {}) {
    let query = 'SELECT * FROM users WHERE 1=1';
    const values = [];
    let paramCount = 0;

    if (filters.role) {
      paramCount++;
      query += ` AND role = $${paramCount}`;
      values.push(filters.role);
    }

    if (filters.is_active !== undefined) {
      paramCount++;
      query += ` AND is_active = $${paramCount}`;
      values.push(filters.is_active);
    }

    query += ' ORDER BY created_at DESC';

    const result = await db.query(query, values);
    return result.rows;
  }
}

module.exports = User;
