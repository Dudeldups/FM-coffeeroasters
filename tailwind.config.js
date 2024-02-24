/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: [".9375rem", "1.5625rem"], // 15 / 25
      sm: ["1rem", "1.625rem"], // 16 / 26
      md: ["1.125rem", "1.5625rem"], // 18 / 25
      lg: ["1.5rem", "2.5rem"], // 24 / 40
      xl: ["2rem", "2.5rem"], // 32 / 40
      "2xl": ["2.5rem", "3rem"], // 40 / 48
      "3xl": ["4.5rem", "4.5rem"], // 72 / 72
    },
    screens: {
      mobile: { max: "42.4375em" },
      xs: "23.4375em",
      sm: "30em",
      md: "42.5em",
      lg: "60em",
      xl: "71.25rem",
    },
    extend: {
      colors: {
        custom: {
          "dark-cyan": "#0C807E",
          "dark-blue": "#333D4B",
          "pale-orange": "#FDD6BA",
          "light-cream": "#FEFCF7",
          "dark-grey": "#6B6E77",
          grey: "#83888F",
          "light-grey": "#B7C0CE",
        },
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
    },
  },

  plugins: [],
};
