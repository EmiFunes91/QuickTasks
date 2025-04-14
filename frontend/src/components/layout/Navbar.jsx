import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

export default function Navbar() {
  const { user, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/') // 🔁 redirecciona al Home
  }

  return (
    <header className="bg-gray-800 text-white p-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <Link to="/">QuickTasks</Link>
      </h1>

      <nav className="flex items-center space-x-4">
        {user ? (
          <>
            <span className="text-gray-300 text-sm">Hola, {user.email}</span>
            <Link to="/dashboard" className="hover:text-blue-400">Dashboard</Link>
            <Link to="/tareas" className="hover:text-blue-400">Tareas</Link>
            <Link to="/perfil" className="hover:text-blue-400">Perfil</Link>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md"
            >
              Cerrar sesión
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-blue-400">Iniciar sesión</Link>
            <Link to="/register" className="hover:text-blue-400">Registrarse</Link>
          </>
        )}
      </nav>
    </header>
  )
}



