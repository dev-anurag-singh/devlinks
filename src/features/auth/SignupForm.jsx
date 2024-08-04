import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import IconMail from '../../assets/icons/icon-email.svg?react';
import IconPassword from '../../assets/icons/icon-password.svg?react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormIcon,
  FormMessage,
} from '../../ui/Form';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import { useSignup } from './useSignup';

const formSchema = z
  .object({
    email: z
      .string({ message: "Can't be empty" })
      .email({ message: 'Invalid email' }),
    password: z.string({ message: "Can't be empty" }).min(8, {
      message: 'Must be 8 characters',
    }),
    confirmPassword: z.string({ message: "Can't be empty" }).min(8, {
      message: 'Must be 8 characters',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Check again',
    path: ['confirmPassword'],
  });

function SignupForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });
  const { signup, isLoading } = useSignup();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(signup)} className="space-y-6">
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
                <Input placeholder="e.g. alex@email.com" {...field} />
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
              <FormLabel>Enter Password</FormLabel>
              <FormIcon>
                <IconPassword />
              </FormIcon>
              <FormControl>
                <Input
                  type="password"
                  placeholder="At least 8 characters"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter Confirm Password</FormLabel>
              <FormIcon>
                <IconPassword />
              </FormIcon>
              <FormControl>
                <Input
                  type="password"
                  placeholder="At least 8 characters"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col">
          <Button type="submit">Create new account</Button>
        </div>
      </form>
    </Form>
  );
}

export default SignupForm;
