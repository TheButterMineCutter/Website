/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        animationOne: 'animationOne 750ms ease-in-out forwards',
        animationTwo: 'animationTwo 750ms ease-in-out forwards',
        typed: 'typed 1s linear infinite alternate',
        move: 'move 1s ease-in',
        blink: 'blink 1s linear infinite'
      },
      keyframes: {
        animationOne: {
          '0%': { transform: 'translateY(70px)', opacity: '0'},
          '100%': { transform: 'translateY(0px)', opacity: '1'},
        },
        animationTwo: {
          '0%': { transform: 'translateX(70px)', opacity: '0'},
          '100%': { transform: 'translateX(0px)', opacity: '1'},
        },
        typed: {
          '0%': { width: '0%'},
          '20%': { width: '0%'},
          '100%': { width: '150px'},
        },
        move: {
          '0%': { right: '0px'},
          '100%': { right: '15%'},
        },
        blink: {
          '0%': { 'border-right-color': 'transparent'},
          '50%': { 'border-right-color': 'white'},
        }
      }
    }
  },
  plugins: [],
}
