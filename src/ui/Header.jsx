import LogoSmall from '../assets/icons/logo-devlinks-small.svg?react';
import LogoFull from '../assets/icons/logo-devlinks-large.svg?react';
import IconPreview from '../assets/icons/icon-preview-header.svg?react';
import Button from './Button';
import MainNav from './MainNav';
import { useProfile } from '../features/profile/ProfileContext';
import { Link } from 'react-router-dom';

function Header() {
  const { profile } = useProfile();
  return (
    <header className="flex items-center justify-between bg-white p-4 pl-6 md:rounded-lg">
      <Link to="/dashboard">
        <LogoSmall className="md:hidden" />
        <LogoFull className="hidden h-8 w-36 md:inline-block" />
      </Link>
      <MainNav />
      <Button to={`/preview/${profile.id}`} variation="secondary">
        <IconPreview className="md:hidden" />
        <span className="hidden md:inline-block">Preview</span>
      </Button>
    </header>
  );
}

export default Header;
