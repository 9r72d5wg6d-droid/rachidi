// Main JavaScript - LabAccess

// Configuration de l'API
const API_BASE_URL = 'http://localhost:3000/api';

// État global de l'application
const AppState = {
  user: null,
  token: null,
  role: null
};

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
  // Charger l'utilisateur depuis le localStorage
  const savedUser = localStorage.getItem('user');
  const savedToken = localStorage.getItem('token');
  
  if (savedUser && savedToken) {
    AppState.user = JSON.parse(savedUser);
    AppState.token = savedToken;
    AppState.role = AppState.user.role;
  }

  // Rediriger selon l'état
  handleRouting();
});

// Gestion du routage
function handleRouting() {
  const currentPath = window.location.pathname;
  
  if (!AppState.token) {
    // Non authentifié → Rediriger vers login
    if (currentPath !== '/pages/auth/login.html') {
      window.location.href = '/pages/auth/login.html';
    }
  } else {
    // Authentifié → Rediriger selon le rôle
    if (currentPath === '/pages/auth/login.html') {
      if (AppState.role === 'admin') {
        window.location.href = '/pages/admin/dashboard.html';
      } else if (AppState.role === 'agent') {
        window.location.href = '/pages/agent/dashboard.html';
      }
    }
  }
}

// Fonction API générique
async function apiCall(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      ...(AppState.token && { 'Authorization': `Bearer ${AppState.token}` })
    }
  };
  
  const finalOptions = { ...defaultOptions, ...options };
  
  try {
    const response = await fetch(url, finalOptions);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Erreur API');
    }
    
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

// Fonctions d'authentification
async function login(email, password) {
  const data = await apiCall('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password })
  });
  
  AppState.user = data.user;
  AppState.token = data.token;
  AppState.role = data.user.role;
  
  localStorage.setItem('user', JSON.stringify(data.user));
  localStorage.setItem('token', data.token);
  
  return data;
}

function logout() {
  AppState.user = null;
  AppState.token = null;
  AppState.role = null;
  
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  
  window.location.href = '/pages/auth/login.html';
}

// Fonctions utilitaires
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  const container = document.querySelector('.notifications') || document.body;
  container.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 5000);
}

function formatDate(date) {
  return new Date(date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function formatDuration(minutes) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  
  if (hours > 0) {
    return `${hours}h ${mins}min`;
  }
  return `${mins}min`;
}

// Exporter pour utilisation dans d'autres modules
window.LabAccess = {
  AppState,
  apiCall,
  login,
  logout,
  showNotification,
  formatDate,
  formatDuration
};
