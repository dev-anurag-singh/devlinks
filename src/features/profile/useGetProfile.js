import { useQuery } from '@tanstack/react-query';
import { getProfile } from '../../services/apiProfiles';
import { useUser } from '../auth/useUser';

export function useGetProfile() {
  const { user } = useUser();

  const { isLoading, data, error } = useQuery({
    queryKey: ['profile'],
    queryFn: () => getProfile(user.id),
  });

  return { isLoading, data, error };
}
