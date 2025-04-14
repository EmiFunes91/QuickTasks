// src/services/authService.js
import axios from 'axios'

const API_URL = 'http://localhost:8080/auth'

export const loginService = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log('✅ Login exitoso:', response.data)
    return response.data
  } catch (err) {
    console.error('❌ Error en loginService:', err.response?.data || err.message)
    return null
  }
}


  