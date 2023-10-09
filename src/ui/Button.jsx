function Button({ children }) {
  return (
    <button className="rounded-lg bg-purple py-3 font-bold text-white transition-colors hover:bg-purple-hover disabled:bg-purple-light">
      {children}
    </button>
  );
}

export default Button;
