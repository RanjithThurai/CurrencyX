// Production configuration
// This file is safe to commit - it reads from environment variables or uses a placeholder

const CONFIG = {
    // For production, you can:
    // 1. Replace this with your actual API key (if you're okay with it being public)
    // 2. Use a backend proxy to hide the key
    // 3. Use platform-specific environment variables

    API_KEY: 'YOUR_API_KEY_HERE', // Replace before deploying
    API_BASE_URL: 'https://v6.exchangerate-api.com/v6'
};

// Note: For client-side apps, the API key will be visible in the browser
// Consider using a backend proxy for production if security is critical
