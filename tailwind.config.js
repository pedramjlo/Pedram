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
        "custom-blue": "#58B2FE"
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
    },
  },


  plugins: [],
}