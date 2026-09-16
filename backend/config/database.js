// Configuration de la base de données - LabAccess
// Exemple pour Node.js avec PostgreSQL

const { Pool } = require('pg');

// Configuration de la connexion
const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'labaccess',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  max: 20, // Nombre maximum de clients dans le pool
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Test de connexion
pool.on('connect', () => {
  console.log('Connecté à la base de données PostgreSQL');
});

pool.on('error', (err) => {
  console.error('Erreur de connexion à la base de données:', err);
  process.exit(-1);
});

// Fonction pour exécuter une requête
async function query(text, params) {
  const start = Date.now();
  try {
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log('Exécuté requête', { text, duration, rows: res.rowCount });
    return res;
  } catch (error) {
    console.error('Erreur de requête:', error);
    throw error;
  }
}

// Fonction pour obtenir un client du pool
async function getClient() {
  const client = await pool.connect();
  return client;
}

module.exports = {
  pool,
  query,
  getClient
};
