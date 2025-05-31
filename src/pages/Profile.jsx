import UpdateProfile from '../features/profile/UpdateProfile';
function Profile() {
  return (
    <>
      <div className="flex flex-col gap-10 p-6 pb-0 md:p-10 md:pb-0">
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
    </>
  );
}

export default Profile;
