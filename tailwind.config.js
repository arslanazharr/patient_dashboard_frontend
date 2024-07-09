/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#1B73A3",
      },
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
        inter: ["inter", "serif"],
      },
    },
  },
  plugins: [],
};
