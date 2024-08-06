const schema = {
  github: 'github.com/',
  frontendmentor: 'frontendmentor.io/profile/',
  twitter: 'twitter.com/',
  linkedin: 'linkedin.com/',
  youtube: 'youtube.com/@',
  facebook: 'facebook.com/',
  twitch: 'twitch.tv/',
  devto: 'dev.to/',
  codewars: 'codewars.com/users/',
  codepen: 'codepen.io/',
  gitlab: 'gitlab.com/',
  stackoverflow: 'stackoverflow.com/',
};

export const isCorrectUrl = (url, platform) => {
  const i = schema[platform];
  return url.includes(i);
};

export const getPlaceholder = (platform) => {
  if (!platform) return 'yourwebsite.com/';
  return schema[platform];
};
