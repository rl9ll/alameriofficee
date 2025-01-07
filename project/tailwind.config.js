/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f5ff',
          700: '#1a365d',
          800: '#153e75',
          900: '#1e3a8a',
        },
        yellow: {
          400: '#facc15',
          500: '#eab308',
        },
        blue: {
          500: '#3b82f6',
        },
        green: {
          500: '#22c55e',
        },
        red: {
          500: '#ef4444',
        },
        gray: {
          50: '#f9fafb',
          300: '#d1d5db',
          600: '#4b5563',
        }
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    },
  },
  plugins: [],
};