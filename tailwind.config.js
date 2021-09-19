module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        arrowUp: "url('/src/assets/arrowUp.svg')",
        arrowDown: "url('/src/assets/arrowDown.svg')",
        dollar: "url('/src/assets/dollar.svg')",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};
