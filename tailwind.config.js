/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        'valentine-red': '#f87171',
        'valentine-pink': '#fecaca',
        'valentine-dark': '#991b1b',
      },
      fontFamily: {
        body: ['Open Sans', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

