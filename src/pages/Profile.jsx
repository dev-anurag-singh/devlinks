import { useProfile } from '../features/profile/ProfileContext';
import UpdateProfile from '../features/profile/UpdateProfile';
import Button from '../ui/Button';

function Profile() {
  const { isUpdating } = useProfile();
  return (
    <>
      <div className="flex flex-col gap-10 p-6 md:p-10">
        <div className="flex flex-col gap-2 ">
          <h2 className="text-md font-bold text-grey-dark md:text-heading">
            Profile Details
          </h2>
          <p className="">
            Add your details to create a personal touch to your profile.
          </p>
        </div>
        <UpdateProfile />
      </div>
      <div className="flex flex-col border-t border-grey-border p-5 md:items-end">
        <Button type="submit" form="update-profile-form" disabled={isUpdating}>
          Save
        </Button>
      </div>
    </>
  );
}

export default Profile;
