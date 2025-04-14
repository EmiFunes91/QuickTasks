import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-black/60 backdrop-blur-sm text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
        Bienvenido a <span className="text-blue-400">QuickTasks</span>
      </h1>

      <p className="text-lg text-gray-300 max-w-xl mb-8">
        Organiza tus tareas, optimiza tu tiempo y mejora tu productividad con nuestra solución moderna y segura.
      </p>

      <div className="flex space-x-4">
        <Link
          to="/login"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-lg transition"
        >
          Iniciar sesión
        </Link>
        <Link
          to="/register"
          className="bg-white hover:bg-gray-200 text-blue-600 px-6 py-2 rounded-lg text-lg transition"
        >
          Registrarse
        </Link>
      </div>
    </div>
  )
}

export default Home
