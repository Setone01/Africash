/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        clash: ["Clash Display", "san-serif"],
      },
      color: {
        green: ["#068353"],
      },
    },
  },
  plugins: [],
};
