const InputField = ({ label, type, placeholder, id }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="capitalize font-semibold " htmlFor={id}>
        {label}:
      </label>
      <input
        required
        className="input-field"
        name={id}
        id={id}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
