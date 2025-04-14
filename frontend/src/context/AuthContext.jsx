// src/context/AuthContext.jsx
import { createContext, useEffect, useState } from 'react'
import { loginService } from '../services/authService'

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  useEffect(() => {
    const storedToken = localStorage.getItem('token')
    const storedEmail = localStorage.getItem('email')
    if (storedToken && storedEmail) {
      setToken(storedToken)
      setUser({ email: storedEmail })
    }
  }, [])

  const login = async (email, password) => {
    const result = await loginService(email, password)
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
    setToken(null)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

