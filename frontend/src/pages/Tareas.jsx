import { useEffect, useState } from 'react'
import Card from '../components/Card'
import Input from '../components/Input'
import Button from '../components/Button'
import Checkbox from '../components/Checkbox'

export default function Tareas() {
  const [tareas, setTareas] = useState([])
  const [nuevaTarea, setNuevaTarea] = useState('')

  // Cargar desde localStorage al montar
  useEffect(() => {
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || []
    setTareas(tareasGuardadas)
  }, [])

  // Guardar en localStorage al modificar
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas))
  }, [tareas])

  const handleAgregar = () => {
    if (nuevaTarea.trim() === '') return
    const nueva = {
      id: Date.now(),
      texto: nuevaTarea,
      completada: false
    }
    setTareas([...tareas, nueva])
    setNuevaTarea('')
  }

  const toggleCompletada = (id) => {
    setTareas(tareas.map(t => t.id === id ? { ...t, completada: !t.completada } : t))
  }

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(t => t.id !== id))
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Card>
        <h2 className="text-2xl font-bold mb-4">Mis Tareas</h2>
        <div className="flex items-center gap-4">
          <Input
            id="nuevaTarea"
            value={nuevaTarea}
            onChange={e => setNuevaTarea(e.target.value)}
            placeholder="Ej: Terminar componente de tareas"
          />
          <Button onClick={handleAgregar}>Agregar</Button>
        </div>
      </Card>

      {tareas.length === 0 ? (
        <p className="text-center text-gray-400">No hay tareas aún.</p>
      ) : (
        tareas.map(tarea => (
          <Card key={tarea.id} className="flex items-center justify-between">
            <Checkbox
              label={tarea.texto}
              checked={tarea.completada}
              onChange={() => toggleCompletada(tarea.id)}
            />
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => eliminarTarea(tarea.id)}
            >
              🗑
            </button>
          </Card>
        ))
      )}
    </div>
  )
}

