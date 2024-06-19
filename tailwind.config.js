/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        TitleFont: ["Titillium Web", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primaryBg: "#ffffff",
        primaryText: "#000000",
        mainColor: "#4cc9f0",
        buttonColor: "#ff9f1c",
        borderColor: "#e5e5e5",
      },
    },
  },
  plugins: [],
};
