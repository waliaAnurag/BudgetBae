const config = {
  API_URL: __DEV__ ? 'http://localhost:3000' : 'https://api.yourapp.com',
  STORAGE_PREFIX: '@expense_manager',
  DEBUG_MODE: __DEV__,
};

export default config;