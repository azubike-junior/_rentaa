const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xxs: { min: "320px", max: "374px" },
      xs: { min: "374px", max: "427px" },
      ...defaultTheme.screens,
      "2xl": { min: "2560px" },
    },
    fontSize: {
      xs: ".67rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    fontFamily: {
      "dm-sans": ["DM Sans", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      height: {
        600: "30rem",
        700: "40rem",
        800: "48rem",
        900: "55rem",
        1000: "70rem",
      },
      width: {
        400: "25rem",
        500: "30rem",
        550: "32rem",
        600: "36rem",
        700: "40rem",
        800: "48rem",
        900: "55rem",
        1000: "65rem",
      },
      backgroundImage: {
        "purple-bg": "url('../images/purpleBackground.svg')",
      },
      outline: {
        blue: ["10px solid  rgba(53, 32, 140, 0.3)", "10px"],
        secondary: ["1px solid  #35208C"],
      },
      colors: {
        secondary: "#35208C",
        primary: "#EFECEC",
        darkAsh: "#222229",
        home: "#252525",
        bgAsh: "rgba(0, 0, 0, 0.3)",
        lightCream: "#E5E5E5",
        darkCream: "#E8E8EE",
        homesec: "#BFB9D9",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
