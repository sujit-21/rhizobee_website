/**
 * Centralized Frontend Environment Configuration
 * Reads from Vite's import.meta.env with fallback defaults
 */
export const config = {
  appName: import.meta.env.VITE_APP_NAME || 'Rhizobee Innovations',
  appTagline: import.meta.env.VITE_APP_TAGLINE || 'Secure Payments. Smart Solutions.',
  appUrl: import.meta.env.VITE_APP_URL || 'http://localhost:3000',

  apiUrl: import.meta.env.VITE_API_URL || '/api',
  backendUrl: import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000',

  contactEmail: import.meta.env.VITE_CONTACT_EMAIL || 'info@rhizobee.com',
  supportEmail: import.meta.env.VITE_SUPPORT_EMAIL || 'support@rhizobee.com',
  careersEmail: import.meta.env.VITE_CAREERS_EMAIL || 'careers@rhizobee.com',
  contactPhone: import.meta.env.VITE_CONTACT_PHONE || '+91 11 4567 8900',

  zoompeUrl: import.meta.env.VITE_ZOOMPE_URL || 'https://www.zoompe.in',

  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
  mode: import.meta.env.MODE || 'development'
};

export default config;
