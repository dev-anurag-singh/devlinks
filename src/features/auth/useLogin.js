import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (data) => {
      queryClient.setQueryData(['user'], data.user);
      navigate('/', { replace: true });
      toast.success('Logged in success');
    },
    onError: (err) => {
      console.log('Error', err);
      toast.error(err.message);
    },
  });

  return { login, isLoading };
}
