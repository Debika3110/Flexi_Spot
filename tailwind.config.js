/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "light-blue":"#a2f4fd",
        "grey-yellow":"#d6d3d1",
        "cyn":"#00bcff",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      perspective: {
        '1000': '1000px',
      },
      rotate: {
        'y-180': 'rotateY(180deg)',
      },
    },
  },
  plugins: [],
}

