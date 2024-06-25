const ReusableInputField = ({
  title,
  name,
  value,
  onChange,
  type = "text"
}) => {
  return (
    <div>
      <h1 className={`text-gray-200 mb-2 text-sm`}>{title}</h1>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`bg-transparent outline-none border-b border-gray-700 focus:border-primary w-full px-1 py-3 text-white transition-all duration-300`}
        required
      />
    </div>
  );
};

export default ReusableInputField;
