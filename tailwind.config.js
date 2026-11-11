/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#FFF7F3',
          100: '#FFE6D5',
          200: '#FFD2B8',
          300: '#FFA475',
          400: '#FF7B3C',
          500: '#C00000', // Deep Red (Primary)
          600: '#E00000', // Bright Red (Secondary)
          700: '#B32F06',
          800: '#8E2101',
          900: '#6B1500',
          950: '#440d00',
        },
        sky: {
          100: '#FFF0EA',
        },
        primary: {
          50: '#FFF7F3',
          100: '#FFE6D5',
          200: '#FFD2B8',
          300: '#FFA475',
          400: '#FF7B3C',
          500: '#F4511E',
          600: '#D83C0C',
          700: '#B32F06',
          800: '#8E2101',
          900: '#6B1500',
          950: '#440d00',
        },
        corporate: {
          dark: '#222222', // Dark Text
          blue: '#C00000', // Deep Red (Primary)
          mid: '#E00000', // Bright Red (Secondary)
          light: '#FFF7F3', // Light Section Background
        },
        accent: {
          gold: '#F4511E', // Orange (Accent)
          goldHover: '#FF9800', // Golden Orange (Highlight)
          goldLight: '#FFF0EA', // Light Accent Background
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-down': 'slideDown 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-slow': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
