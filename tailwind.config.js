const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xxs: { min: "250px", max: "374px" },
      xs: { min: "374px", max: "427px" },
      ...defaultTheme.screens,
      "2xl": { min: "2560px" },
    },
    fontFamily: {
      "dm-sans": ["DM Sans", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      dossis: ["Dosis", "sans-serif"],
    },
    extend: {
      borderWidth: {
        1: "0.5px",
      },
      height: {
        98: "409px",
        600: "30rem",
        650: "526px",
        700: "40rem",
        800: "48rem",
        900: "55rem",
        1000: "70rem",
        1300: "90rem",
        60: "60vh",
        80: "80vh",
      },
      maxWidth: {
        xmd: "488px",
        xxs: "274px",
        btn: "689px",
        form: "748px",
      },
      width: {
        18: "75px",
        26: "104px",
        90: "350px",
        400: "25rem",
        500: "30rem",
        550: "32rem",
        600: "36rem",
        700: "40rem",
        800: "48rem",
        900: "55rem",
        1000: "65rem",
        1500: "80rem",
        92: "92vw",
      },
      backgroundImage: {
        "purple-bg": "url('../images/purpleBackground.svg')",
        "about-img":
          "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/src/images/about-us.png')",
      },
      colors: {
        secondary: "#35208C",
        primary: "#EFECEC",
        darkAsh: "#222229",
        bgAsh: "rgba(0, 0, 0, 0.3)",
        lightCream: "#E5E5E5",
        darkCream: "#E8E8EE",
        greyishWhite: "#FAFAFA",
        lightAsh: "#8A8892",
        darkBlue: "#150C38",
        green: "#32C50D",
        ash: "#D3D3D3",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
