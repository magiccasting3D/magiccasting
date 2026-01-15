/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./pages/**/*.html"
  ],
  theme: {
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
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '104': '26rem',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [
  require('@tailwindcss/forms'),
  require('tailwindcss-animate'),
  require('@tailwindcss/typography'),
  require('@tailwindcss/aspect-ratio'),
  // line-clamp is now included in Tailwind CSS v3.3+ by default, but if you want to be safe:
  // require('@tailwindcss/line-clamp'), 
  require('tailwindcss-elevation'), 
  require('tailwindcss-fluid-type'),
],
}
