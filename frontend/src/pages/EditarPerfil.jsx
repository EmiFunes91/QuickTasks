import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const EditarPerfil = () => {
  const { token, logout } = useContext(AuthContext)
  const navigate = useNavigate()
  const [perfil, setPerfil] = useState({ nombre: '', email: '' })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPerfil = async () => {
      try {
        const { data } = await axios.get('/usuarios/auth/me', {
          headers: { Authorization: `Bearer ${token}` }
        })
        setPerfil(data)
      } catch (err) {
        console.error('❌ Error al cargar perfil:', err)
        Swal.fire('Error', 'No se pudo cargar el perfil', 'error')
        logout()
        navigate('/login')
      } finally {
        setLoading(false)
      }
    }

    if (token) {
      fetchPerfil()
    } else {
      logout()
      navigate('/login')
    }
  }, [token, logout, navigate])

  const handleChange = (e) => {
    const { name, value } = e.target
    setPerfil((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.put('/usuarios/auth/me', perfil, {
        headers: { Authorization: `Bearer ${token}` }
      })
      Swal.fire('✅ Perfil actualizado', 'Tus datos fueron guardados', 'success')
      navigate('/perfil')
    } catch (err) {
      console.error('❌ Error al actualizar:', err)
      Swal.fire('Error', 'No se pudo actualizar el perfil', 'error')
    }
  }

  if (loading) return <p className="text-center mt-10">Cargando datos...</p>

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Editar Perfil</h2>

        <label className="block text-gray-700 mb-2">Nombre</label>
        <input
          type="text"
          name="nombre"
          value={perfil.nombre}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded mb-4"
        />

        <label className="block text-gray-700 mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={perfil.email}
          disabled
          className="w-full px-4 py-2 border rounded mb-4 bg-gray-100"
        />

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Guardar cambios
        </button>
      </form>
    </div>
  )
}

export default EditarPerfil

