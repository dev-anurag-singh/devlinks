import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { insertLinks as insertLinksApi } from '../../services/apiLinks';

export function useInsertLinks() {
  const queryClient = useQueryClient();

  const { mutate: insertLinks, isLoading: isCreating } = useMutation({
    mutationFn: insertLinksApi,
    onSuccess: () => {
      toast.success('Links Saved successfully');
      queryClient.invalidateQueries({ queryKey: ['links'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, insertLinks };
}
