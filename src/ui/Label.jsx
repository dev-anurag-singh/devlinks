import { cva } from 'class-variance-authority';

const labelVariants = cva('text-xs text-grey-dark');

function Label({ children, className, ...props }) {
  return (
    <label className={labelVariants({ className })} {...props}>
      {children}
    </label>
  );
}

export default Label;
