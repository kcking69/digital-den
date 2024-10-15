/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      backgroundColor: {
        'hero-text-bgc': ' rgba(3, 3, 3, 0.5)',
        ash: ' rgba(143, 143, 143, 0.5)',
      },
      fontFamily: {
        inter: ['Inter'],
        poppins: ['Poppins'],
      },
    },
  },
  plugins: [],
};
