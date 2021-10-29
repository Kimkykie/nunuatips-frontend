module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        primary: '#A544B3',
        secondary: '#E1AD01',
        danger: '#e3342f',
      },
      borderColor: (theme) => ({
        ...theme('colors'),
        DEFAULT: theme('colors.gray.300', 'currentColor'),
        primary: '#A544B3',
        secondary: '#E1AD01',
        danger: '#e3342f',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
