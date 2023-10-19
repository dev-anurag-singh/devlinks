import { options } from '../util/platformOptions';

import IconArrowRight from '../assets/icons/icon-arrow-right.svg?react';

function PreviewItem({ link }) {
  const { icon: Icon, label } = options.find(
    (option) => option.value === link.platform,
  );

  const backgroundColor = {
    github: '#1A1A1A',
    frontendmentor: '#67BECE',
    twitter: '#43B7E9',
    linkedin: '#2D68FF',
    youtube: '#EE3939',
    facebook: '#2442AC',
    twitch: '#EE3FC8',
    devto: '#333333',
    codewars: '#8A1A50',
    gitlab: '#EB4925',
    stackoverflow: '#EC7100',
    codepen: '#0330D1',
  };

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noreferrer"
      style={{ backgroundColor: backgroundColor[link.platform] }}
      className={`bg-grey-medium flex items-center gap-3 rounded-lg  px-4 py-[13px] text-white`}
    >
      <span>
        <Icon className="fill-white" />
      </span>
      <span className="text-xs">{label}</span>
      <span className="ml-auto">
        <IconArrowRight />
      </span>
    </a>
  );
}

export default PreviewItem;
