/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors:{
        'dark-grey':'#354364',
        'light-grey':'#6d7780'
      },
      backgroundImage: {
        'footer-texture': "url('./src/assets/footermain.jpg')",
      }
      
    },
  },
  plugins: [],
}

