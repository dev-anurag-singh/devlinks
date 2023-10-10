function Input({ type, placeholder, id, register, autoComplete }) {
  return (
    <input
      {...register}
      id={id}
      placeholder={placeholder}
      type={type}
      autoComplete={autoComplete}
      className="text-grey-dark outline-none"
    />
  );
}

export default Input;
