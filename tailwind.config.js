/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        primary: '#191A23',
        accent: '#B9FF66',
        secondary: '#7ED321',
      },
    },
  },
  plugins: [],
}