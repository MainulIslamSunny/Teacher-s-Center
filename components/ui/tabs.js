export function Tabs({ children }) {
  return <div>{children}</div>;
}

export function TabsList({ children, className = '' }) {
  return <div className={`flex border-b space-x-4 text-sm ${className}`}>{children}</div>;
}

export function TabsTrigger({ children, value, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`pb-2 border-b-2 ${isActive ? 'border-black font-medium text-black' : 'border-transparent text-gray-500 hover:text-black'}`}
    >
      {children}
    </button>
  );
}