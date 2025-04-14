// src/components/Input.jsx
export default function Input({ label, id, ...props }) {
    return (
      <div className="mb-4">
        {label && (
          <label htmlFor={id} className="block mb-1 text-sm font-medium text-gray-100">
            {label}
          </label>
        )}
        <input
          id={id}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
          {...props}
        />
      </div>
    );
  }
  