/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    darkMode: 'class',
    extend: {
      boxShadow: {
        'sura': '0 5x 10px 0 rgb(23 23 23 / 19%)',
      }
    },
  },
  plugins: [],
}

