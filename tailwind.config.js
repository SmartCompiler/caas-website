/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        bg_dark: 'var(--color-bg-dark)',
        white: 'var(--color-white)',
        gray: 'var(--color-gray)'
      }
    },
  },
  plugins: [],
}
