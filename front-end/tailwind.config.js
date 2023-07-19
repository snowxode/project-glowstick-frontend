/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      body: ['"Montserrat"', 'sans-serif'],
    },

    colors: {
      'ui-green': '#A1F0CA',
      'ui-blue': '#82ADFF',
      'ui-coral': '#FF9D7F',
      'ui-white': '#FFFFF9',
    },

    extend: {},
  },
  plugins: [],
}