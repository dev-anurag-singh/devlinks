import { useLink } from '../features/links/LinksContext';
import { useProfile } from '../features/profile/ProfileContext';
import Preview from './Preview';

function Mockup() {
  const { fields } = useLink();
  const {
    profile: { firstName, lastName, email, imageUrl },
  } = useProfile();

  return (
    <div className="hidden items-center justify-center rounded-xl bg-white p-10 xl:flex">
      <div className="h-[632px] w-[308px] bg-[url('/mobile-mockup.svg')] px-9 py-14 pt-16">
        <Preview
          links={fields}
          firstName={firstName}
          lastName={lastName}
          email={email}
          imageUrl={imageUrl}
        />
      </div>
    </div>
  );
}

export default Mockup;
