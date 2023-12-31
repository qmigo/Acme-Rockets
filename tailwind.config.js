/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/js/*.js', 'index.html'],
  darkMode: "class",
  theme: {
    extend: {
      screens:{
        'widescreen' : {
          'raw': '(min-aspect-ratio: 3/2)'},
          'tallscreen' : {
            'raw': '(max-aspect-ratio: 13/20)'}
      },
      keyframes: {
        'open-menu': {
          '0%': {transform: 'scaleY(0)'},
          '80%': {transform: 'scaleY(1.2)'},
          '100%': {transform: 'scaleY(1)'}
        }
      },
      animation: {
        'open-menu': 'open-menu 0.8s ease-in forwards'
      }
    },
  },
  plugins: [],
}

