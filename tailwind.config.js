/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        heading: ['2rem', '150%'],
        md: ['1.5rem', '150%'],
        xs: ['.75rem', '150%'],
      },
      boxShadow: {
        input: '0 0 32px 0 rgba(99,60,255,.25)',
      },
    },
    fontFamily: { sans: 'Instrument Sans,sans-serif' },
    colors: {
      purple: {
        DEFAULT: '#633CFF',
        light: '#EFEBFF',
        hover: '#BEADFF',
      },
      grey: {
        dark: '#333333',
        DEFAULT: '#737373',
        light: '#FAFAFA',
        border: '#D9D9D9',
        medium: '#EEEEEE',
      },
      white: '#FFFFFF',
      red: '#FF3939',
      transparent: 'transparent',
    },
  },
  plugins: [],
};
