import { useQuery } from '@tanstack/react-query';
import { getLinks } from '../../services/apiLinks';
import { useUser } from '../auth/useUser';

export function useGetLinks() {
  const { user } = useUser();

  const { isLoading, data, error } = useQuery({
    queryKey: ['links'],
    queryFn: () => getLinks(user.id),
  });

  return { isLoading, data, error };
}
