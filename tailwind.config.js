/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          950: '#1A0508',
          900: '#2E0A0F',
          800: '#4A0E17',
          700: '#6B131D',
          600: '#881B27',
          500: '#A42231',
        },
        pine: {
          900: '#0C1E16',
          800: '#16382B',
          700: '#1E4D3B',
          600: '#26624B',
          500: '#2D7257',
          300: '#68B696',
        },
        gold: {
          500: '#D4AF37',
          400: '#E5B869',
          300: '#F3C77C',
          200: '#F9E2B5',
          100: '#FDF6E9',
        },
        cream: {
          50: '#FFFDF9',
          100: '#FAF4EB',
          200: '#F3EBDD',
          300: '#E5DAC8',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(229, 184, 105, 0.25)',
        'maroon-deep': '0 15px 35px rgba(26, 5, 8, 0.6)',
      }
    },
  },
  plugins: [],
}
