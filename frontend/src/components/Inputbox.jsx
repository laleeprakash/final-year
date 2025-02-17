export function Inputbox({ label, placeholder, onChange, id, type = "text" }) {
  return (
    <div className="p-1">
      <div className="p-1 text-sm font-medium text-left">
        <label htmlFor={id} className="font-semibold">{label}</label>
      </div>
      <input
        id={id}
        required
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        className="w-full md:w-80 p-2 rounded-sm border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xl"
      />
    </div>
  );
}
