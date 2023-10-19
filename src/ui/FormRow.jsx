function FormRow({ children, label, icon, error }) {
  return (
    <div className="">
      <label
        htmlFor={children.props.id}
        className={`text-sm ${error ? 'text-red' : 'text-grey-dark'}`}
      >
        {label}
      </label>
      <div
        className={`bg-white ${
          error
            ? 'border-red'
            : 'border-grey-border focus-within:border-purple focus-within:shadow-input'
        } mt-1 grid grid-cols-[16px_minmax(6rem,1fr)_minmax(0,auto)] items-center gap-3.5 rounded-lg border-[1px] px-4 py-3  transition-all `}
      >
        {icon}
        {children}
        {error ? (
          <span className="text-[10px] text-red md:text-sm">{error}</span>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default FormRow;
