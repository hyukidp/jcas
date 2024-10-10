/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
          ],
  theme: {
    extend: {
      colors: {
      'brandWhite': '#FFFFFF',
      'brandBlack': '#333333',
      'brandYellow': '#ffc12f',
      'brandGreen': '#2F6C48',
      'brandRed': '#D23939',
      'brandBlue': '#3767A4',
    }},
  },
  plugins: [
    require('daisyui'),
  ],
}

