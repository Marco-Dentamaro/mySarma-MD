/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        greenCustom : '#abe8dc',
        blueNav : '#2b50b0',
        bgCard : '#E6ECF9',
        bgButton : '#F6F9FF',
        primaryCust : {
          DEFAULT: '#2B50B0',
          dark : '#121127'
        },
        
        primary700 : '#1A316B',
        greyCust: {
          DEFAULT : '#7D8797',
          dark : '#6D7791',
        },
        
        
      },

      backgroundImage:{
        bgHero: "linear-gradient(rgba(43, 80, 176, 0.4), rgba(43, 80, 176,0.4)), url('./src/media/heroImg.png')",
      },
    },
  },
  plugins: [],
}

