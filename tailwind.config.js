const withMT = require('@material-tailwind/react/utils/withMT');
module.exports = withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },

    extend: {
      colors: {
        dark: {
          100: 'rgb(196, 196, 196)',
          200: 'rgb(101, 100, 100)',
          300: 'rgb(47, 48, 53)',
        },
        primary: 'rgb(28, 98, 205)',
        gray: 'rgb(240, 240, 244)',
        border: "1px solid rgb(47, 48, 53)"
      },
      
      
    },
  },
  plugins: [],
});
