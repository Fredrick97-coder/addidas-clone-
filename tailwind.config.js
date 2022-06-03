module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        addidas: ['AdihausDIN', 'sans-serif'],
        addidasbold: [
          'AdihausDIN-CnBold',
          'AdihausDIN Cn',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'custom-green': '#00b300',
      },
    },
    plugins: [],
  },
};
