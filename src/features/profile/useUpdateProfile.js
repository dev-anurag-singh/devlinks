import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { updateProfile as updateProfileApi } from '../../services/apiProfiles';

export function useUpdateProfile() {
  const { mutate: updateProfile, isLoading: isUpdating } = useMutation({
    mutationFn: updateProfileApi,
    onSuccess: () => {
      toast.success('User profile successfully updated');
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateProfile, isUpdating };
}
