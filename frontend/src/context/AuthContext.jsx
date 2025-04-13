import { createContext, useState } from 'react'
import { loginService } from '../services/authService'

// Acá creamos y exportamos el contexto
export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const login = async (email, password) => {
    const result = await loginService(email, password)
    if (result?.token) {
      localStorage.setItem('token', result.token)
      setUser({ email: result.email })
      return true
    }
    return false
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

