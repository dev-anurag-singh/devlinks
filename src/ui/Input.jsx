function Input({ type, placeholder, id, register }) {
  return (
    <input
      {...register}
      id={id}
      placeholder={placeholder}
      type={type}
      className="text-grey-dark outline-none"
    />
  );
}

export default Input;
