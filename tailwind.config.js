module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      "dm-sans": ["DM Sans", "sans-serif"],
    },
    extend: {
      width: {
        '600': '36rem',
       },
      colors: {
        secondary: "#35208C",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
