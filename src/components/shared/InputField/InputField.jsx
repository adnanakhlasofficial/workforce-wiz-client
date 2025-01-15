const InputField = ({ label, type, placeholder }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="capitalize font-semibold " htmlFor={type}>
        {label}:
      </label>
      <input
        className="input-field"
        id={type}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
