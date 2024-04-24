/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Merriweather: ["Merriweather", "sans-serif"],
        WorkSans:["Work-Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}