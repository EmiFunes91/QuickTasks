import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-semibold text-blue-700">
        QuickTasks
      </div>
      <div className="space-x-4">
        <Link className="text-gray-700 hover:text-blue-600" to="/login">
          Login
        </Link>
        <Link className="text-gray-700 hover:text-blue-600" to="/register">
          Registro
        </Link>
        {token && (
          <>
            <Link className="text-gray-700 hover:text-blue-600" to="/perfil">
              Perfil
            </Link>
            <button
              onClick={handleLogout}
              className="ml-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Cerrar sesión
            </button>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
