// src/pages/Perfil.jsx
import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const Perfil = () => {
  const { token, logout } = useContext(AuthContext)
  const navigate = useNavigate()
  const [usuario, setUsuario] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPerfil = async () => {
      try {
        const response = await axios.get('http://localhost:8080/usuarios/auth/me', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setUsuario(response.data)
      } catch {
        Swal.fire('Error', 'No se pudo cargar el perfil. Por favor inicia sesión nuevamente.', 'error')
        logout()
        navigate('/login')
      } finally {
        setLoading(false)
      }
    }

    fetchPerfil()
  }, [token, logout, navigate])

  if (loading) return <p className="text-center mt-10">Cargando perfil...</p>

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Mi Perfil</h2>

        <div className="mb-4">
          <p><strong>Nombre:</strong> {usuario.nombre}</p>
          <p><strong>Email:</strong> {usuario.email}</p>
          <p><strong>Roles:</strong> {usuario.roles?.join(', ')}</p>
        </div>

        <button
          onClick={() => {
            logout()
            navigate('/login')
          }}
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 mt-4"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  )
}

export default Perfil
