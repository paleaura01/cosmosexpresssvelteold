const { localStorageStore } = require('svelte-local-storage-store');

/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class', // false, media or class
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      borderColor: ['dark'],
      divideColor: ['dark'],
      placeholderColor: ['dark'],
      textColor: ['dark'],
      ringColor: ['dark'],
      ringOffsetColor: ['dark'],
      ringOffsetWidth: ['dark'],
      ringOpacity: ['dark'],
      boxShadow: ['dark'],
      opacity: ['dark'],
    },
  },
  plugins: [
    require('tailwindcss'),
    require('tailwindcss-dark-mode')(),
    require('autoprefixer'),
    
  ]
};
