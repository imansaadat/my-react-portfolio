/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "992px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        mainFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        primaryColor: "#212428",
        secondaryColor: "#ff014f",
        light: "#c4cfde",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      },
      animation: {
        shake : 'shake 0.25s infinite',
      },
      keyframes: {
        shake: {
          "0%": { transform: "translate(0, 0)", transform: "rotate(0deg)" },
          "25% ": {
            transform: "translate(5px, 5px)",
            transform: "rotate(5deg)",
          },
          "50% ": { transform: "translate(0, 0)", transform: "rotate(0eg)" },
          "75% ": {
            transform: "translate(-5px, 5px)",
            transform: "rotate(-5deg)",
          },
          "100% ": { transform: "translate(0, 0)", transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

