/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        gradient1: "linear-gradient(to bottom, #223439, #1d2127)",
        gradient2: "linear-gradient(to bottom, #317fec, #35e4df)",
      },
    },
    colors: {
      primaryColor: "#223439",
      primaryColorDark: "#1b1f24",
      secondaryColor: "#a9fb50",
      textDark: "#333333",
      textLight: "#a3a3a3",
      white: "#ffffff",
      black: "#000000",
      yellow: "#FFD700",
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
      },
    },
    fontFamily: {
      Poppins: ["Poppins", "sans serif"],
    },
  },
  plugins: [],
};
