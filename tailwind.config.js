/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          light: '#1B355A',
          DEFAULT: '#0B1F3A',
          dark: '#051020',
          deep: '#030A14'
        },
        gold: {
          light: '#EAD180',
          DEFAULT: '#D4AF37',
          dark: '#B08E22',
          metallic: '#C5A028'
        },
        beige: {
          light: '#FAF7F2',
          DEFAULT: '#F3ECE0',
          dark: '#E7DEC8'
        }
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s infinite alternate',
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
        pulseGlow: {
          '0%': { boxShadow: '0 0 5px rgba(212, 175, 55, 0.4)' },
          '100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.8)' },
        }
      }
    },
  },
  plugins: [],
}
