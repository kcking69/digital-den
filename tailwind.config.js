/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      backgroundColor: {
        'hero-text-bgc': ' rgba(3, 3, 3, 0.2)',
      },
    },
  },
  plugins: [],
};
