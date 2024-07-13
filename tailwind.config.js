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
      }
    },
  },
  plugins: [],
}

