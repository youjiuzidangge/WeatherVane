if (!import.meta.env.VITE_API_KEY) {
  throw new Error('API key is not defined in environment variables');
}

export const API_URL = import.meta.env.VITE_API_URL;
export const API_UNIT = import.meta.env.VITE_API_UNITS;
export const API_ID = import.meta.env.VITE_API_KEY;