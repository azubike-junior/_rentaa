module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      "dm-sans": ["DM Sans", "sans-serif"],
    },
    extend: {
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
