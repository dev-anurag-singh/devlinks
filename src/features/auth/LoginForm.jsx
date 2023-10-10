import { useForm } from 'react-hook-form';
import Input from '../../ui/Input';
import IconMail from '../../assets/icons/icon-email.svg?react';
import IconPassword from '../../assets/icons/icon-password.svg?react';
import FormRow from '../../ui/FormRow';
import Button from '../../ui/Button';
import validator from 'validator';
import { useLogin } from './useLogin';

function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { login, isLoading } = useLogin();

  const onSubmit = ({ email, password }) => {
    login(
      { email, password },
      {
        onSettled: () => reset(),
      },
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <FormRow
        label="Email address"
        icon={<IconMail />}
        error={errors?.email?.message}
      >
        <Input
          register={register('email', {
            required: `Can't be empty`,
            validate: (v) => validator.isEmail(v) || 'Please check again',
          })}
          id="email"
          autoComplete="username"
          type="text"
          placeholder="e.g. alex@email.com"
        />
      </FormRow>
      <FormRow
        label="Password"
        icon={<IconPassword />}
        error={errors?.password?.message}
      >
        <Input
          register={register('password', {
            required: `Can't be empty`,
            validate: (v) =>
              validator.isStrongPassword(v) || 'Please check again',
          })}
          id="password"
          autoComplete="current-password"
          type="password"
          placeholder="Enter your password"
        />
      </FormRow>
      <Button disabled={isLoading} variation="primary">
        Login
      </Button>
    </form>
  );
}

export default LoginForm;
