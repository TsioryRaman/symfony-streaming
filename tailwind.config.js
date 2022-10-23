/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
  ],
  theme: {
    extend: {
      colors: {
        'default': '#333',
        "select-color": '#222',
        "dark":"#1b1b1b"
      },
      strokeWidth: {
        '4': '4px',
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
