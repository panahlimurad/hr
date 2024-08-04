/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "header-bg": "#343c48",
        "sidebar-bg": "#ffff",
      }
    },
  },
  plugins: [],
}

