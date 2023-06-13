/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},

    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#A459D1",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#9AC5F4",
      silver: "#ecebff",
      bubble: "#ff77e9",
      bermuda: "#482121",
    },

    fontFamily: {
      serif: ["ui-serif", "Georgia"],
      navigation: ["Abril Fatface"],
      main: ["Cormorant Garamond"],
    },
  },
  plugins: [],
};
