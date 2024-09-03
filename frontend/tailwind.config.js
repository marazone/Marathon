/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {

    },
    screens: {
      ph: { max: '1023px' },

      dt: { min: '1024px' },

      lst:{ max: '1499px' },

      dtlst:{ min: '1500px' },
    },
  },
  plugins: [],
});
