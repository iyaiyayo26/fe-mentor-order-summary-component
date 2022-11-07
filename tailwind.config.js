/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    extend: {
      colors: {
        "desaturated-blue": "#7280a7",
        "pale-blue": "#e0e8ff",
        "very-pale-blue": "#f5f7ff",
        "bright-blue": "	#3829e0",
      },
      fontFamily: {
        "red-hat-display": ["Red Hat Display", "sans-serif"],
      },
      boxShadowColor: {
        veryPaleBlue: "	rgba(245,247,255,1.000)",
      },
    },
  },
  plugins: [],
};
