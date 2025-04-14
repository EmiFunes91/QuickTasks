import { useState, useEffect } from 'react'
import { AuthContext } from './AuthContext'
import { loginService } from '../services/authService'

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(localStorage.getItem('token') || '')

  useEffect(() => {
    if (token) {
      const email = localStorage.getItem('email')
      if (email) {
        setUser({ email })
      }
    }
  }, [token])

  const login = async (email, password) => {
    const result = await loginService(email, password)
    console.log('📤 Enviando credenciales:', { email, password })
    if (result?.token) {
      localStorage.setItem('token', result.token)
      localStorage.setItem('email', result.email)
      setToken(result.token)
      setUser({ email: result.email })
      return true
    }
    return false
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    setUser(null)
    setToken('')
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
