import { useController } from 'react-hook-form';

function ControlledInput({
  control,
  name,
  rules,
  onChange,
  id,
  placeHolder,
  defaultValue = '',
  type,
  autoFocus,
}) {
  const { field } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  return (
    <input
      {...field}
      onChange={(e) => {
        field.onChange(e);
        onChange(e);
      }}
      id={id}
      autoFocus={autoFocus}
      placeholder={placeHolder}
      type={type}
      className="bg-transparent text-grey-dark outline-none"
    />
  );
}

export default ControlledInput;
