/**
 * Application Configuration
 * Centralized access point for all environment variables with production-ready fallbacks.
 */
export const appConfig = {
  appName: import.meta.env.VITE_APP_NAME || "Agrobank Davomat",
  appTitle: import.meta.env.VITE_APP_TITLE || "Xodimlar Davomati",
  version: import.meta.env.VITE_APP_VERSION || "1.0.0",
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || "https://api.agrobank.uz/v1",
  apiTimeout: Number(import.meta.env.VITE_API_TIMEOUT) || 10000,
  defaultLang: import.meta.env.VITE_DEFAULT_LANG || "uz",
  enableMockAuth: import.meta.env.VITE_ENABLE_MOCK_AUTH === "true",
  enableMockData: import.meta.env.VITE_ENABLE_MOCK_DATA === "true",
  isProduction: import.meta.env.PROD,
  isDevelopment: import.meta.env.DEV,
};

export default appConfig;
