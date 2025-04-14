import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../components/forms/LoginForm'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* Más rutas luego */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
