/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#0463FA",
      light: "#EFF5FF",
      dark: "#1B2C51",
      black: colors.black,
      white: colors.white,
      yellow: colors.yellow,
      blue: colors.blue,
    },
    extend: {},
  },

  plugins: [],
};
