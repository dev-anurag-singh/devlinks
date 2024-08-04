import * as React from 'react';

import { cn } from '../util/cn';

const Input = React.forwardRef(
  ({ className, type, invalid, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'border-border flex h-12 w-full rounded-lg border bg-transparent pl-11 pr-4 text-base text-grey-dark outline-none transition-colors',
          invalid
            ? ' focus-visible:shadow-error border-red'
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
