/** @type {import('tailwindcss').Config} */
// import {withMT} from "@material-tailwind/react/util"
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Changa", "sans-serif"],
      serif: ["Changa", "serif"],
      body: ["Changa", "sans-serif"],
    },
    // extend: {},
  },
  plugins: [],
});
