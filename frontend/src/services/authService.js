import axios from 'axios'

const API_URL = '/auth'

export const loginService = async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });
      return response.data;
    } catch (err) {
      console.error('Error en loginService:', err);
      return null;
    }
  };
  