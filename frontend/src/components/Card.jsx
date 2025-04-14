// src/components/Card.jsx
export default function Card({ children, className = '' }) {
    return (
      <div className={`bg-white text-gray-900 rounded-xl shadow-md p-6 ${className}`}>
        {children}
      </div>
    );
  }
  