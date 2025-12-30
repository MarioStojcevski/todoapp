export default function Button({ children, color, ...props }) {
  return (
    <button
      className="bg-blue-400 text-gray-50 hover:bg-blue-700 hover:text-gray-200 rounded-md px-3 py-2"
      {...props}
    >
      {children}
    </button>
  );
}
