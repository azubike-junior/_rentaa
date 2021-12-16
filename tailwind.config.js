module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
