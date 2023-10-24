import { Link } from 'react-router-dom';

function Button({ children, disabled, type, to, onClick, form, variation }) {
  const base =
    'inline-block disabled:cursor-not-allowed rounded-lg py-[10px] px-4 md:px-7 font-semibold transition-colors';

  const styles = {
    primary:
      base +
      ' ' +
      'text-white bg-purple hover:bg-purple-hover disabled:bg-purple-light',
    secondary:
      base +
      ' ' +
      'text-purple bg-white border-[1px] border-purple hover:bg-purple-light disabled:opacity-25',
  };

  if (to) {
    return (
      <Link to={to} className={styles[variation]}>
        {children}
      </Link>
    );
  }

  return (
    <button
      form={form}
      onClick={onClick}
      disabled={disabled}
      className={styles[variation]}
      type={type}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  variation: 'primary',
  type: 'button',
};

export default Button;
