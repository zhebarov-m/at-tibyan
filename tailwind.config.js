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
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'sd': '600px',
      // => @media (min-width: 699px) { ... }

      'xr': '699px',
      // => @media (min-width: 699px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'mz': '932px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}

