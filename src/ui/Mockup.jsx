import { useLink } from '../features/links/LinksContext';
import { useProfile } from '../features/profile/ProfileContext';
import Preview from './Preview';

function Mockup() {
  const { links } = useLink();
  const {
    profile: { firstName, lastName, email, imageUrl },
  } = useProfile();

  return (
    <div className="hidden w-[35rem] items-center justify-center rounded-xl bg-white xl:flex">
      <div className="h-[632px] w-[308px] bg-[url('/mobile-mockup.svg')] px-9 py-14 pt-16">
        <Preview
          links={links}
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
