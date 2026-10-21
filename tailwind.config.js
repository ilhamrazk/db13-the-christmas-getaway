/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // "Holiday Express" palette: a vintage travel poster for a mountain getaway
        pine: {
          950: '#0B241D',
          900: '#12352B',
          800: '#1A4537',
          700: '#245847',
          600: '#336E5A',
        },
        cherry: {
          800: '#7E0C20',
          700: '#9A0F27',
          600: '#B3122E',
          500: '#C9304A',
        },
        ticket: {
          50: '#FBF6EC',
          100: '#F2E6CF',
          200: '#E6D4B2',
          300: '#D2BB91',
        },
        brass: {
          500: '#C38D2C',
          400: '#D9A441',
          300: '#E9C277',
        },
        frost: {
          300: '#CFE3E8',
          400: '#A9C9CF',
          500: '#7FA8AF',
        },
        kraft: {
          400: '#C79A6B',
          500: '#B98B5E',
          600: '#9C7148',
        },
        ink: {
          900: '#241A14',
          700: '#4A3A2F',
          500: '#6E5A4B',
        },
      },
      fontFamily: {
        display: ['"Big Shoulders Display"', 'Impact', 'sans-serif'],
        serif: ['"Newsreader"', 'Georgia', 'serif'],
        sans: ['"Newsreader"', 'Georgia', 'serif'],
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        twinkle: 'twinkle 3.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
