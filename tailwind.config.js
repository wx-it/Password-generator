/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  integrations: [
    tailwind({
      config: { applyAstroPreset: false, applyBaseStyles: true },
    }),
  ],
  safelist : {

    colors: {
      "darkGreen" : '#073b3a',
      "lightGreen" : '#0b6e4f',
      "lighterGreen" : '#4ADF86;',
      "blue" : '#077187',
      "textColor" : '#a3f7b5',
    },
  
    
    boxShadow: {
      "contentShadow": '5px 5px 60px -10px rgba(0, 0, 0, 0.3)',
    }
  },
  theme: {
    screens:{
      sm: '375px',
      md: '765px',
    },
    extend: {
    },
    
  },
  plugins: [],
}














