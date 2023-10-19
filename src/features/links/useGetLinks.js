import { useQuery } from '@tanstack/react-query';
import { getLinks } from '../../services/apiLinks';

export function useGetLinks() {
  const { isLoading, data: links } = useQuery({
    queryKey: ['links'],
    queryFn: getLinks,
  });

  return { isLoading, links };
}
