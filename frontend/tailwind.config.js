/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    fontFamily: {
      sans: ['var(--font-sans)', 'sans-serif'],
      heading: ['var(--font-heading)', 'sans-serif'],
      handwritten: ['"Playwrite AU NSW"', 'cursive'],
      display: ['var(--font-display)'],
      italicDisplay: ['var(--font-italic-display)'],
    },
     keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
  },
},
 animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out',
      },
  },
},
  plugins: [],
};



