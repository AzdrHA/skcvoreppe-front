const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      'primary': '#126CE5',
      'primary-100': '#1358B6',
      'danger': '#B45353',
      'warning': '#faad14',
      'sky-blue': '#F6F9FB',
      'sky-blue-100': '#EDF2F7',
      'dark': '#26272B',
    },
    extend: {
      colors: colors,
    },
  },
  plugins: [],
};
