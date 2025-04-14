// src/components/layout/Sidebar.jsx
export default function Sidebar() {
    return (
      <aside className="w-64 bg-gray-900 text-gray-100 h-screen p-6 hidden md:block">
        <nav className="space-y-4">
          <a href="#" className="block hover:text-blue-400">📋 Tareas</a>
          <a href="#" className="block hover:text-blue-400">🗂 Proyectos</a>
          <a href="#" className="block hover:text-blue-400">⚙️ Configuración</a>
        </nav>
      </aside>
    );
  }
  