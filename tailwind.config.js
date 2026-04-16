/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#1B2A6B', light: '#243580', dark: '#131f50' },
        silver: { DEFAULT: '#8A8A8A', light: '#B0B0B0', dark: '#606060' },
        cream: '#F8F8F8',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
