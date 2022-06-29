/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      sm: '375px',
      md: '765px',
      lg: '970px',
      xl: '1440px'
    },
    extend: {
      colors: {
        darkGreen : '#073b3a',
        lighterGreen : '#0b6e4f',
        lightGreen : '#4ADF86;',
        blue : '#077187',
        textColor : '#a3f7b5',
        white : '#FFFF',
      },
    },
    
      boxShadow: {
        '3xl': '5px 5px 60px -10px rgba(0, 0, 0, 0.3)',
      }
  },
  plugins: [],
}
