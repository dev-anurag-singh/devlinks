import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { Controller, FormProvider, useFormContext } from 'react-hook-form';

import { cn } from '../util/cn';
import { Label } from './Label';

const Form = FormProvider;

const FormFieldContext = React.createContext({});

const FormField = ({ ...props }) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>');
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

const FormItemContext = React.createContext({});

const FormItem = ({ className, ...props }) => {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div className={cn('relative space-y-1', className)} {...props} />
    </FormItemContext.Provider>
  );
};

const FormLabel = ({ className, ...props }) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      className={cn(error && 'text-red', className)}
      htmlFor={formItemId}
      {...props}
    />
  );
};

const FormIcon = ({ className, ...props }) => {
  const { formItemId } = useFormField();
  return (
    <Label
      htmlFor={formItemId}
      className={'absolute bottom-0 left-0 grid h-12 w-11 place-content-center'}
      {...props}
    />
  );
};

const FormControl = ({ ...props }) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      invalid={error}
      {...props}
    />
  );
};

const FormMessage = ({ className, children, ...props }) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      id={formMessageId}
      className={cn(
        'absolute right-0 top-0 text-sm font-medium text-red',
        className,
      )}
      {...props}
    >
      {body}
    </p>
  );
};

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
  FormIcon,
};
