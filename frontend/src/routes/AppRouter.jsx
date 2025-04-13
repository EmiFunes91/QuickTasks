import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../components/LoginForm'

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
