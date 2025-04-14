import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Perfil from './pages/Perfil'
import EditarPerfil from './pages/EditarPerfil'
import Dashboard from './pages/Dashboard'
import Tareas from './pages/Tareas'
import ProtectedRoute from './routes/ProtectedRoute'
import DashboardLayout from './layout/DashboardLayout'
import PublicLayout from './layout/PublicLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 🌐 Rutas públicas con layout simple */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        {/* 🔐 Rutas protegidas bajo DashboardLayout */}
        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/editar-perfil" element={<EditarPerfil />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tareas" element={<Tareas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App










