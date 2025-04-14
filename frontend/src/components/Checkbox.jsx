// src/components/Checkbox.jsx
export default function Checkbox({ label, checked, onChange, id }) {
    return (
      <label className="inline-flex items-center space-x-2 text-sm text-gray-100">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={onChange}
          className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded"
        />
        <span>{label}</span>
      </label>
    );
  }
  