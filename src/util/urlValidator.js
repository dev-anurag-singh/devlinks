const schema = {
  github: 'https://www.github.com/',
  frontendmentor: 'https://www.frontendmentor.io/profile/',
  twitter: 'https://www.twitter.com/',
  linkedin: 'https://www.linkedin.com/',
  youtube: 'https://www.youtube.com/@',
  facebook: 'https://www.facebook.com/',
  twitch: 'https://www.twitch.tv/',
  devto: 'https://www.dev.to/',
  codewars: 'https://www.codewars.com/users/',
  codepen: 'https://www.codepen.io/',
  gitlab: 'https://www.gitlab.com/',
  stackoverflow: 'https://www.stackoverflow.com/',
};

export const isCorrectUrl = (url, platform) => {
  const i = schema[platform];
  return url.startsWith(i);
};

export const getPlaceholder = (platform) => {
  if (!platform) return 'https://www.yourwebsite.com/';
  return schema[platform];
};
