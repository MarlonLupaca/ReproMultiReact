/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      filter: { 
        'custom-grayscale': 'grayscale(50%)',
      }

    },
  },
  plugins: [],
}