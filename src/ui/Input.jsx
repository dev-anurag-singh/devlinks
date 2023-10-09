function Input({ type, placeholder, id }) {
  return (
    <input id={id} placeholder={placeholder} type={type} className="text-grey-dark outline-none" />
  );
}



export default Input;
