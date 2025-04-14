// src/layout/PublicLayout.jsx
import { Outlet } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'

export default function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
      <Navbar />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  )
}


