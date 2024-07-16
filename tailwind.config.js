/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        primary100 : '#D2DCF4',
        primary200 : '#A1B5E8',
        secondary100 : '#F1F0FA',
        secondary300 : '#A9A5DF',
        black100 : '#E8E8E8',
        black200 : '#A7AEBE',
        black600 : '#121B30',
        greenCustom : '#abe8dc',
        greenCustom500 : '#34BFA3',
        blueNav : '#2b50b0',
        bgCard : '#E6ECF9',
        bgCardPro : '#E2E1F4',
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
        bgBan : "url('./src/media/blueban.png')",
        bgMail : "url('./src/media/mailbanner.png')",
      },
    },
  },

}

