import React from 'react'

const Dashboard = () => {
  const userEmail = localStorage.getItem('user')

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Bienvenido a QuickTasks 🎯</h1>
      <p className="text-gray-700">Estás logueado como: <strong>{userEmail}</strong></p>
    </div>
  )
}

export default Dashboard
