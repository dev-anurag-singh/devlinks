import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { updateProfileImage } from '../../services/apiProfiles';

export function useUpdateAvatar() {
  const { mutate: updateAvatar, isLoading: isUpdating } = useMutation({
    mutationFn: ({ avatar, userId }) => updateProfileImage(avatar, userId),
    onError: (err) => toast.error(err.message),
  });

  return { updateAvatar, isUpdating };
}
