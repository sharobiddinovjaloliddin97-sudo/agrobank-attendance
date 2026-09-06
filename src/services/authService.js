import appConfig from "../config/appConfig";

/**
 * Service to handle authentication API requests using configured environment baseUrl
 */
export const loginUser = async (credentials) => {
  if (appConfig.enableMockAuth) {
    // Simulated network latency when running in mock mode
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          user: {
            name: "Abdulaxatov Diyorbek",
            role: "Administrator",
          },
          token: "mock-jwt-token-agrobank-attendance",
        });
      }, 250);
    });
  }

  // Real backend call using configured API base URL
  const response = await fetch(`${appConfig.apiBaseUrl}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error("Authentication failed");
  }

  return response.json();
};
