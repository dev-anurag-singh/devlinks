import { useParams } from 'react-router-dom';
import { useUser } from '../features/auth/useUser';
import Preview from '../ui/Preview';
import Button from '../ui/Button';
import { useGetLinks } from '../features/links/useGetLinks';
import toast from 'react-hot-toast';

function UserPreview() {
  const { user } = useUser();

  const { isLoading, links } = useGetLinks();

  const {
    user_metadata: { firstName, lastName, email, avatar: imageUrl },
  } = user;

  const handleClick = () => {
    toast('Comming soon', { icon: '😊' });
  };

  return (
    <div className="relative flex flex-col items-center  md:p-6">
      <div className="absolute left-0 top-0 -z-10 hidden h-[22rem] w-full rounded-b-[2rem] bg-purple md:block"></div>
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
      <div className="mt-16 rounded-3xl md:bg-white md:px-12 md:py-14 md:shadow-md">
        <div className="w-60">
          <Preview
            links={links}
            firstName={firstName}
            lastName={lastName}
            email={email}
            imageUrl={imageUrl}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}

export default UserPreview;
