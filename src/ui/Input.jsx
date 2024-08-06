import * as React from 'react';

import { cn } from '../util/cn';

const Input = React.forwardRef(
  ({ className, type, invalid, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-12 w-full rounded-lg border border-border bg-transparent bg-white pl-11 pr-4 text-base text-grey-dark outline-none transition-colors',
          invalid
            ? ' border-red focus-visible:shadow-error'
            : 'focus-visible:border-purple focus-visible:shadow-input',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export default Input;
