import Input from '../../ui/Input';
import IconMail from '../../assets/icons/icon-email.svg?react';
import IconPassword from '../../assets/icons/icon-password.svg?react';
import FormRow from '../../ui/FormRow';
import Button from '../../ui/Button';

function LoginForm() {
  return (
    <form className="flex flex-col gap-6">
      <FormRow label="Email address" icon={<IconMail />}>
        <Input id="email" type="email" placeholder="e.g. alex@email.com" />
      </FormRow>
      <FormRow label="Password" icon={<IconPassword />}>
        <Input id="password" type="password" placeholder="Enter your password" />
      </FormRow>
      <Button variation="primary">Login</Button>
    </form>
  );
}

export default LoginForm;
