function FormRow({ children, label, icon, error, horizontal }) {
  return (
    <div
      className={`${horizontal && 'md:flex md:flex-row md:justify-between'}`}
    >
      <label
        htmlFor={children.props.id}
        className={`${horizontal && 'md:text-base md:text-grey'} ${
          error ? 'text-red' : 'text-grey-dark'
        } text-xs`}
      >
        {label}
      </label>
      <div
        className={`bg-white ${horizontal && 'md:w-[21.5rem]'} ${
          error
            ? 'border-red'
            : 'border-grey-border focus-within:border-purple focus-within:shadow-input'
        } mt-1 grid ${
          icon
            ? 'grid-cols-[minmax(0,16px)_minmax(6rem,1fr)_minmax(0,auto)]'
            : 'grid-cols-[minmax(6rem,1fr)_auto]'
        } items-center gap-3.5 rounded-lg border-[1px] px-4 py-3  transition-all `}
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
