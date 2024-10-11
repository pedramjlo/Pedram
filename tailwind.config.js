/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {


    extend: {
      colors: {
        "custom-black": "#1E201E",
        "custom-white": "#FAF9F6",
        "custom-blue": "#58B2FE",
        "custom-gray": "#AEAEAE"
      },

      fonts: {
        "serif": ["El Messiri", "serif"],
        "sans-serif": ["El Messiri", "sans-serif"],
      },

      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },

      lineHeight: {
        '11': '2.75rem', 
        '12': '3rem',    
        '13': '3.25rem', 
        '14': '3.5rem',
        '15': '3.75rem',
        '16': '4rem',  
        '17': '4.25rem',
        '18': '4.5rem',
      },

      gap: {
        '15': '3.75rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '19': '4.75rem'
      },

    },
  },


  plugins: [],
}