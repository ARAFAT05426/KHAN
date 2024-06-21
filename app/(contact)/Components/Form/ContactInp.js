const ContactInp = ({ title, name }) => {
  return (
    <div>
      <h1 className="text-gray-200">{title}</h1>
      <input
        type="text"
        name={name}
        className="bg-transparent outline-none border-b border-card focus-within:border-b-primary w-full px-1 py-3 transition-all duration-300"
        required
      />
    </div>
  );
};
export default ContactInp;
