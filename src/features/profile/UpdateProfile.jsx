import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import { useProfile } from './ProfileContext';
import IconImageUpload from '../../assets/icons/icon-upload-image.svg?react';

function UpdateProfile() {
  const {
    profile: { firstName, lastName, email, imageUrl },
    handleEmail,
    handleFirstName,
    handleLastName,
    handleSubmit,
    errors,
    handleImage,
  } = useProfile();

  return (
    <form
      onSubmit={handleSubmit}
      id="update-profile-form"
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col gap-4 rounded-xl bg-grey-light p-5 md:flex-row md:items-center md:justify-between">
        <label htmlFor="profile-image">Profile picture</label>
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <div
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
            className="relative flex h-48 w-48 flex-col items-center justify-center  overflow-hidden rounded-xl bg-purple-light bg-cover bg-center bg-no-repeat"
          >
            <IconImageUpload />
            <span className="font-semibold text-purple">
              {imageUrl ? 'Change image' : '+ Upload Image'}
            </span>
            <input
              type="file"
              onChange={handleImage}
              id="profile-image"
              className="absolute h-full w-full cursor-pointer opacity-0"
              accept="image/*"
            />
          </div>
          <p className="text-xs md:w-32">
            Image must be below 1024x1024px. Use PNG or JPG format.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 rounded-xl bg-grey-light p-5">
        <FormRow
          horizontal={true}
          label="First Name*"
          error={errors?.firstName}
        >
          <input
            id="first-name"
            type="text"
            className="bg-transparent text-grey-dark outline-none"
            value={firstName}
            onChange={handleFirstName}
            placeholder="First name"
          />
        </FormRow>
        <FormRow horizontal={true} label="Last Name*" error={errors?.lastName}>
          <input
            id="last-name"
            type="text"
            className="bg-transparent text-grey-dark outline-none"
            value={lastName}
            onChange={handleLastName}
            placeholder="Last name"
          />
        </FormRow>
        <FormRow horizontal={true} label="Email">
          <input
            id="email"
            type="text"
            className="bg-transparent text-grey-dark outline-none"
            value={email}
            onChange={handleEmail}
            placeholder="Email"
          />
        </FormRow>
      </div>
    </form>
  );
}

export default UpdateProfile;
