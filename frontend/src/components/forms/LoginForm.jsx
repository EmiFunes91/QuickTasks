import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import Input from '../Input'
import Button from '../Button'

export default function LoginForm() {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const success = await login(email, password)
    if (success) {
      navigate('/dashboard')
    } else {
      setError('Credenciales incorrectas. Intenta de nuevo.')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-4"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800">Iniciar sesión</h2>

      {error && <p className="text-red-600 text-sm text-center">{error}</p>}

      <Input
        label="Email"
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        label="Contraseña"
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button type="submit" className="w-full">Ingresar</Button>
    </form>
  )
}




