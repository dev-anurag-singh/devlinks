import { NavLink } from 'react-router-dom';
import IconLink from '../assets/icons/icon-links-header.svg?react';
import IconProfile from '../assets/icons/icon-profile-details-header.svg?react';

function MainNav() {
  return (
    <nav>
      <ul className="flex">
        <li className="">
          <NavLink
            to="/dashboard"
            className="group flex items-center gap-2 rounded-lg px-7 py-[11px] font-semibold transition-colors hover:text-purple"
          >
            <IconLink className="group-hover:fill-purple" />
            <span className="hidden md:inline-block">Links</span>
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/profile"
            className="group flex items-center gap-2 rounded-lg px-6 py-[11px] font-semibold transition-colors hover:text-purple"
          >
            <IconProfile className="group-hover:fill-purple" />
            <span className="hidden md:inline-block">Profile Details</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
