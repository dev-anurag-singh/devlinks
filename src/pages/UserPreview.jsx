import { useParams } from 'react-router-dom';
import Preview from '../ui/Preview';
import Button from '../ui/Button';
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import { getProfile } from '../services/apiProfiles';
import { getLinks } from '../services/apiLinks';
import Spinner from '../ui/Spinner';
import { useUser } from '../features/auth/useUser';

function UserPreview() {
  const { id } = useParams();

  const { user } = useUser();

  const { data: profile, error } = useQuery({
    queryKey: [`profiles-${id}`],
    queryFn: () => getProfile(id),
  });
  const { data: links, error: linksError } = useQuery({
    queryKey: [`links-${id}`],
    queryFn: () => getLinks(id),
  });

  if (!profile || !links) {
    return (
      <div className="flex h-[100dvh] items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (error || linksError) {
    throw new Error('Something went wrong');
  }

  const handleClick = () => {
    navigator.clipboard
      .writeText(location.href)
      .then(() => {
        toast('Copied to clipboard', { icon: '😊' });
      })
      .catch(() => {
        toast.error('Something went wrong');
      });
  };

  return (
    <div className="relative flex flex-col items-center  md:p-6">
      <div className="absolute left-0 top-0 -z-10 hidden h-[22rem] w-full rounded-b-[2rem] bg-purple md:block"></div>
      {user?.id === id && (
        <div className="flex justify-between gap-4 self-stretch rounded-xl p-4 pl-6 md:bg-white">
          <div className="grid basis-40 grid-cols-1">
            <Button to="/dashboard" variation="secondary">
              Go to Editor
            </Button>
          </div>
          <div className="grid basis-40 grid-cols-1">
            <Button onClick={handleClick}>Share Link</Button>
          </div>
        </div>
      )}
      <div className="mt-16 rounded-3xl md:bg-white md:px-12 md:py-14 md:shadow-md">
        <div className="w-60">
          <Preview
            links={links || []}
            firstName={profile.firstName}
            lastName={profile.lastName}
            email={profile.email}
            imageUrl={profile.imageUrl}
          />
        </div>
      </div>
    </div>
  );
}

export default UserPreview;
