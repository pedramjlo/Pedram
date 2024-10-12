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
        "custom-gray": "#AEAEAE",
        "custom-green": "#A3F88F"
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


      width: {
        '12': '3rem',
        '13': '3.25rem',
        '15': '3.75rem'
      },

      heigt: {
        '12': '3rem',
        '13': '3.25rem',
        '15': '3.75rem'
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
        '19': '4.75rem',
        '21': '5.25rem',
        '22': '5.5rem',
        '23': '5.75rem',
        '24': '6rem',
        '25': '6.25rem',
        '35': '8.75rem'
      },

      textUnderlineOffset: {
        1: '0.75rem',
        2: '1rem',
        3: '2rem',
      },

    },
  },


  plugins: [],
}