// src/components/Button.jsx
export default function Button({ children, className = '', ...props }) {
    return (
      <button
        className={`bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition duration-200 disabled:opacity-50 ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  
  