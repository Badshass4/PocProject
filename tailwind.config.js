const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        MAIN_THEME_COLOR: '#0ea5e9',
        SECONDARY_THEME_COLOR: '#d6d3d1',
        ERROR_COLOR: '#be123c',
        SUCCESS_COLOR: '#15803d',
        INFO_COLOR: '#2563eb',
      },
      fontFamily: {
        mono: ['monospace'],
      },
    },
  },
  plugins: [],
};
