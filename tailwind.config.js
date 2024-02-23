// import { plugin } from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // "just-tablet": { min: "42.5em", max: "59.9375rem" },
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
          "dark-cyan": "#0E8784",
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

  plugins: [
    // plugin(function ({ addVariant }) {
    //   addVariant("hocus", ["&:hover", "&:focus"]);
    //   addVariant("beafter", ["&:after", "&:before"]);
    // }),
  ],
};
