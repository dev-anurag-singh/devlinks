function Input({
  type,
  placeholder,
  id,
  register,
  autoComplete,
  defaultValue,
}) {
  return (
    <input
      {...register}
      id={id}
      placeholder={placeholder}
      type={type}
      defaultValue={defaultValue}
      autoComplete={autoComplete}
      className="bg-transparent text-grey-dark outline-none"
    />
  );
}

export default Input;
