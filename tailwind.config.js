const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xxs: "320px",
      xs: { min: "375px", max: "427px" },
      ...defaultTheme.screens,
    },
    fontFamily: {
      "dm-sans": ["DM Sans", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      width: {
        600: "36rem",
        700: "40rem",
      },
      colors: {
        secondary: "#35208C",
        primary: "#EFECEC",
        darkAsh: "#222229",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
