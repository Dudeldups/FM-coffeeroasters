/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          "dark-cyan": "#0E8784",
          "dark-blue": "#333D4B",
          "pale-orange": "#FDD6BA",
          "light-cream": "#FEFCF7",
          grey: "#83888F",
        },
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        fraunces: ["Faunces", "serif"],
      },
    },
  },
  plugins: [],
};
