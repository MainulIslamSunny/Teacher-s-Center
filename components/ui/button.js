export function Button({ children, variant = 'default', className = '', ...props }) {
  const base = 'inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded shadow-sm focus:outline-none';
  const variants = {
    default: 'bg-black text-white hover:bg-gray-800',
    outline: 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}