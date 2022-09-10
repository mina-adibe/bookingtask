/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: [
    "./src/components/**/*.js",
    "./src/components/**/*.jsx",
    "./src/pages/**/*.js",
    "./src/pages/**/*.jsx",
  ],

  content: ["./src/**/*.{jsx,js}"],
  mode: "jit",
  theme: {
    fontFamily: {
      body: ["Lato", "sans-serif"],
    },

    colors: {
      c000: "#ffffff", //white
      c100: "#000000", // black
      c200: "#4894FE", // primary blue color
      c300: "#E1E1E1", // borders - dividers
    },
    fontSize: {
      xxs: "0.875rem", //14px
      xs: "0.938rem", // 15px
      sm: "1rem", // 16px
      base: "1.063rem", // 17px
      md: "1.125rem", // 18px
      lg: "1.563rem", //25px
    },
    spacing: {
      1: "8px",
      2: "9px",
    },
    borderRadius: {
      base: "0.625rem" /* 10px */,
      md: "0.875rem" /* 14px */,
    },
    borderWidth: {
      1: "1px",
    },
    extend: {
      boxShadow: {
        btn: "0px 1px 4px rgba(0, 0, 0, 0.161)",
      },
    },
  },
  plugins: [],
};
