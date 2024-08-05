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
        "icon-bg": "#f89308",
        "main-bg": "#f0f2f8",
        "color-open-list": "#3f4254",
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}

