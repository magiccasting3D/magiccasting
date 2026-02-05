/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./index.html", //
  "./pages/**/*.html"
],
  theme: {
    screens: {
      'xs': '400px',     // New custom breakpoint for 400px
      'sm': '640px',     // Standard Tailwind
      'md': '768px',     // Standard Tailwind
      'lg': '1024px',    // Standard Tailwind
      'xl': '1280px',    // Standard Tailwind
    },
    extend: {
      colors: {
        'terracotta': {
          50: '#fdf6f3',
          100: '#f5f1ed',
          200: '#e8a87c',
          300: '#d98b5f',
          400: '#c77d5a',
          500: '#c77d5a',
          600: '#a65e3f',
        },
        'warm-stone': {
          50: '#fafaf9',
          100: '#f5f1ed',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          850: '#1f1e1d',
          900: '#1c1917',
          950: '#1a1614',
        },
        'cream': {
          50: '#fdfcfb',
          100: '#f5f1ed',
          200: '#e8e4df',
          300: '#d4cdc5',
        }
      },
      fontFamily: {
        'serif': ['Crimson Text', 'Georgia', 'serif'],
        'sans': ['DM Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      // ... (your existing spacing settings)
      animation: {
        'float': 'float 3s ease-in-out infinite',
        // ADDED THESE ANIMATIONS:
        'fadeIn': 'fadeIn 1s ease-out forwards',
        'fadeInUp': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        // ADDED THESE KEYFRAMES:
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-elevation'), 
    require('tailwindcss-fluid-type'),
  ],
}