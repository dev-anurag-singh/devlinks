import { useQuery } from '@tanstack/react-query';
import { getLinks } from '../../services/apiLinks';
import { useUser } from '../auth/useUser';

export function useGetLinks() {
  const { user } = useUser();

  const {
    isLoading,
    data: links,
    error,
  } = useQuery({
    queryKey: ['links'],
    queryFn: () => getLinks(user.id),
  });

  return { isLoading, links, error };
}
