import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signup as signupApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export function useSignup() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (data) => {
      queryClient.setQueryData(['user'], data.user);
      toast.success('Siggned up success');
      navigate('/dashboard', { replace: true });
    },
    onError: (err) => {
      console.log('Error', err);
      toast.error(err.message);
    },
  });

  return { signup, isLoading };
}
