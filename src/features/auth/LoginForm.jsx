import { useForm } from 'react-hook-form';
import Input from '../../ui/Input';
import IconMail from '../../assets/icons/icon-email.svg?react';
import IconPassword from '../../assets/icons/icon-password.svg?react';
import Button from '../../ui/Button';
import { useLogin } from './useLogin';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormIcon,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/Form';

const formSchema = z.object({
  email: z
    .string({ message: "Can't be empty" })
    .email({ message: 'Invalid email' }),
  password: z.string({ message: "Can't be empty" }).min(8, {
    message: 'Must be 8 characters',
  }),
});

function LoginForm() {
  const form = useForm({
    defaultValues: {
      email: 'anurag@example.com',
      password: 'Anurag@7664',
    },
    resolver: zodResolver(formSchema),
  });

  const { login, isLoading } = useLogin();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(login)} className="flex flex-col gap-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email address</FormLabel>
              <FormIcon>
                <IconMail />
              </FormIcon>
              <FormControl>
                <Input
                  disabled={isLoading}
                  placeholder="e.g. alex@email.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormIcon>
                <IconPassword />
              </FormIcon>
              <FormControl>
                <Input
                  disabled={isLoading}
                  type="password"
                  placeholder="Enter your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isLoading}>
          Login
        </Button>
      </form>
    </Form>
  );
}

export default LoginForm;
