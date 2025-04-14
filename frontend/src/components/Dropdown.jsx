// src/components/Dropdown.jsx
import { useState } from 'react'

export default function Dropdown({ label, options = [], onChange }) {
  const [selected, setSelected] = useState('')

  const handleChange = (e) => {
    setSelected(e.target.value)
    onChange?.(e.target.value)
  }

  return (
    <div className="mb-4">
      {label && <label className="block mb-1 text-sm text-gray-100">{label}</label>}
      <select
        value={selected}
        onChange={handleChange}
        className="w-full bg-white text-gray-800 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">Seleccionar</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  )
}
