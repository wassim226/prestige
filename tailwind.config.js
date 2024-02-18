/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,jsx}"];
export const mode = "jit";

export const colors = {
  primary: "#4FD38A",
  secondary: "#182740", // "#2F4858",
  darkSecondary: "#151f33",
  gray: "#9DB0A3",
  dimWhite: "#a9abb2",
  darkGreen: "#3A4A40",
  lightGreen: "#25d034",
};

export default {
  content: content,
  theme: {
    extend: {
      colors: colors,
    },
    fontWeight: {
      extrasemibold: "550",
    },
  },
  plugins: [],
};
