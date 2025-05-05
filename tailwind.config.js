/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0d0d0d',
        secondary: '#1a1a1a',
        accent: '#ec4899',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
