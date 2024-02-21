// import { plugin } from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { max: "39.9375rem" },
        sm: "30rem",
        md: "40rem",
        lg: "60rem",
        xl: "80rem",
      },
      colors: {
        custom: {
          "dark-cyan": "#0E8784",
          "dark-blue": "#333D4B",
          "pale-orange": "#FDD6BA",
          "light-cream": "#FEFCF7",
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

  plugins: [
    // plugin(function ({ addVariant }) {
    //   addVariant("hocus", ["&:hover", "&:focus"]);
    //   addVariant("beafter", ["&:after", "&:before"]);
    // }),
  ],
};
