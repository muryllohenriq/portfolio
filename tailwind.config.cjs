/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
  "./src/**/*.tsx",],
  theme: {
    extend: {
      colors: {
        'almost-black': 'rgba(0,0,0,0.5)'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
