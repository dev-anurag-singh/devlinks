import { cva } from 'class-variance-authority';
import { cn } from '../util/cn';

const labelVariants = cva('text-xs text-grey-dark');

export function Label({ children, className, ...props }) {
  return (
    <label className={cn(labelVariants({ className }))} {...props}>
      {children}
    </label>
  );
}
