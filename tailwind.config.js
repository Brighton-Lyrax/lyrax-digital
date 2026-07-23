/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          950: '#0f0024',
          900: '#1a0540',
          800: '#2e0a6e',
          700: '#4c1d95',
          600: '#6d28d9',
          500: '#8b5cf6',
          400: '#a78bfa',
          300: '#c4b5fd',
        },
        gold: {
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        }
      },
    },
  },
  plugins: [],
}
