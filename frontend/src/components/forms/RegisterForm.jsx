// src/components/RegisterForm.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const RegisterForm = () => {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}

    if (!form.nombre.trim()) newErrors.nombre = 'El nombre es obligatorio'
    if (!form.email.includes('@')) newErrors.email = 'Correo inválido'
    if (form.password.length < 6) newErrors.password = 'Mínimo 6 caracteres'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    try {
      const response = await fetch('http://localhost:8080/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })

      if (response.ok) {
        Swal.fire('✅ Registrado', 'Usuario creado correctamente', 'success')
        setForm({ nombre: '', email: '', password: '' })
      } else {
        const data = await response.json()
        Swal.fire('❌ Error', data.message || 'No se pudo registrar', 'error')
      }
    } catch (err) {
      console.error(err)
      Swal.fire('❌ Error de red', 'No se pudo conectar al backend', 'error')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-8 w-full max-w-md"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
        Crear cuenta
      </h2>

      <input
        type="text"
        name="nombre"
        placeholder="Nombre completo"
        value={form.nombre}
        onChange={handleChange}
        className={`w-full mb-2 p-2 border ${errors.nombre ? 'border-red-500' : 'border-gray-300'} rounded-md`}
      />
      {errors.nombre && <p className="text-red-500 text-sm mb-2">{errors.nombre}</p>}

      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={form.email}
        onChange={handleChange}
        className={`w-full mb-2 p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md`}
      />
      {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}

      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={form.password}
        onChange={handleChange}
        className={`w-full mb-4 p-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md`}
      />
      {errors.password && <p className="text-red-500 text-sm mb-4">{errors.password}</p>}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Registrarse
      </button>

      <p className="text-center mt-4 text-sm text-gray-600">
        ¿Ya tenés una cuenta?{' '}
        <Link to="/login" className="text-blue-600 hover:underline">
          Iniciá sesión
        </Link>
      </p>
    </form>
  )
}

export default RegisterForm


