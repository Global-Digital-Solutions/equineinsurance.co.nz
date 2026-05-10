/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: { extend: { colors: { brand: { DEFAULT: '#2c4a2e', light: '#4a7c59', dark: '#1e3320' } } } },
  plugins: [],
}
