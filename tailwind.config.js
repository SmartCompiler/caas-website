/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth:{
        1: '1px'
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        bg_dark: 'var(--color-bg-dark)',
        white: 'var(--color-white)',
        gray: 'var(--color-gray)',
        gray_light: 'var(--color-gray-light)'
      },
      margin: {
        header: 'var(--size-header-height)',
        footer: 'var(--size-footer-height)'
      },
      padding: {
        header: 'var(--size-header-height)',
        footer: 'var(--size-footer-height)'
      },
      height: {
        footer: 'var(--size-footer-height)'
      }
    },
  },
  plugins: [],
}
