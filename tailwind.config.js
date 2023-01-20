/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'ayl': '#f3b700',
        'abn': '#c76a00',
      },
    },
    maxWidth: {
      '1/2': '50%',
    }
  },
  plugins: [],
}
