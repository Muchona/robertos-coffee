/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        onyx: "#0A0A0A",
        void: "#050505",
        gold: "#D4AF37",
        silver: "#E0E0E0",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'onyx-gradient': 'linear-gradient(to bottom right, #121212, #000000)',
        'gold-gradient': 'linear-gradient(45deg, #D4AF37, #C5A028)',
      },
    },
  },
  plugins: [],
}
