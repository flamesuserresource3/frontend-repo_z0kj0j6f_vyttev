function InputField({ label, type = 'text', value, onChange, placeholder, name }) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-gray-200 bg-white/80 px-4 py-3 text-gray-900 placeholder-gray-400 shadow-sm outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-200"
      />
    </div>
  );
}

export default InputField;
