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
      dosis: ["Dosis", "sans-serif"]
    },
    extend: {
      borderWidth: {
        1: "0.5px",
      },
      margin: {
        '87px': '87px'
      },
      height: {
        86: "346px",
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
        '278px': '278px',
        '296px': '296px',
        xxxs: "305px",
        xmd: "488px",
        xxs: "274px",
        btnsm: "314px",
        btn: "689px",
        form: "748px",
        mxl: "550px"
      },
      maxHeight: {
        '193px': '193px'
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
      maxHeight: {
        156: '622px'
      },
      backgroundImage: {
        "purple-bg": "url('../images/purpleBackground.svg')",
        "about-img":
          "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/src/images/about-us.png')",
      },
      fontSize: {
        16: '64px',
        21: '21px'
      },
      colors: {
        secondary: "#35208C",
        primary: "#EFECEC",
        darkAsh: "#222229",
        bgAsh: "rgba(0, 0, 0, 0.3)",
        lightCream: "#E5E5E5",
        darkCream: "#E8E8EE",
        greyishWhite: "#FAFAFA",
        lightGrey: "#A89E9E",
        lightAsh: "#8A8892",
        darkBlue: "#150C38",
        lightRed: "rgba(212, 13, 13, 0.49)",
        grey: "#D3D3D3", 
        mediumGrey: "#606060", 
      },
      boxShadow: {
        'xmd': '0px 4px 40px 0px rgba(0, 0, 0, 0.15)'
      }, 
      gridTemplateColumns: {
        'profileLayoutL': 'auto 305px', 
        'profileLayoutM': 'auto 278px', 
      },
      borderRadius: {
        100: '100px', 
        20: '20px'
      }, 
      inset: {
        '135px': '-135px'
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
