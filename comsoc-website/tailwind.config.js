/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,html}',
  ],
  theme: {
    extend: {
      colors: {
        ieee: {
          blue: '#003D79',
          navy: '#002B5C',
          accent: '#4F7CA4',
          light: '#F2F2F2',
        },
        white: '#ffffff',
      },
    },
  },
  plugins: [],
}
