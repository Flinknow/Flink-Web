module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#404585",
        gray1: "#E5E5E5;",
        sectionBackground: "#E5E5E5;",
        background: "#F4F7FE;",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
