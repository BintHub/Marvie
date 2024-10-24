/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        redHatDisplay:"Red Hat Display"
      },
      colors: {
        primary:'#FF8C00',
        secondary:'#FFE8CC',
        tertiary:'#331C00'
      }
    },
  },
  plugins: [],
}

