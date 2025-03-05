/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs principales
        primary: {
          DEFAULT: '#E63946',     // Rouge intense
          light: '#FF5468',
          dark: '#B71C1C'
        },
        secondary: {
          DEFAULT: '#111111',     // Noir profond
          light: '#333333',
          dark: '#000000'
        },
        accent: {
          DEFAULT: '#FF8C00',     // Orange vif
          light: '#FFA500',
          dark: '#FF7F50'
        },
        background: {
          DEFAULT: '#F5F5F5',     // Blanc pur
          light: '#FFFFFF',
          dark: '#E0E0E0'
        },
        performance: {
          DEFAULT: '#007BFF',     // Bleu électrique
          light: '#4DA6FF',
          dark: '#0056b3'
        },
        premium: {
          DEFAULT: '#6A0DAD',     // Violet foncé
          light: '#9C27B0',
          dark: '#4A148C'
        }
      },
      fontFamily: {
        'body': ['Poppins', 'Inter', 'sans-serif'],
        'heading': ['Montserrat', 'Roboto', 'sans-serif']
      },
      screens: {
        'xs': '375px',   // Extra small devices
        'sm': '640px',   // Small devices
        'md': '768px',   // Medium devices
        'lg': '1024px',  // Large devices
        'xl': '1280px',  // Extra large devices
        '2xl': '1536px', // 2XL devices
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      spacing: {
        '0.5': '0.125rem',
        '1.5': '0.375rem',
        '2.5': '0.625rem',
        '3.5': '0.875rem'
      },
      boxShadow: {
        'fitness-card': '0 10px 25px rgba(230, 57, 70, 0.2)',
        'hover-elevation': '0 15px 30px rgba(0, 0, 0, 0.1)'
      },
      animation: {
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-soft': 'bounce 1.5s ease-in-out infinite'
      },
      keyframes: {
        'fitness-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' }
        }
      }
    },
  },
  plugins: [
    // Ajout de plugins potentiels pour améliorer l'expérience
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}