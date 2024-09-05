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
        "color-text": "#3f4254",
        "bg-tables":"#ffffff",
        "padding-table":"15px 15px 15px 15px",
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        '4xl': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      }
    },
  },
  plugins: [],
}

