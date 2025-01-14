const InputField = ({ type, placeholder }) => {
  return (
    <>
      <input
        className="w-full bg-inherit border-2 border-slate-400 py-1 px-3 rounded-md text-sm"
        type={type}
        placeholder={placeholder}
      />
    </>
  );
};

export default InputField;
