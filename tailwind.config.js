/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    letterSpacing: {
      'widest': '1rem'
    },
    extend: {
      colors: {
        'light-yellow': '#e2d453'
      }
    },
  },
  plugins: [],
}
