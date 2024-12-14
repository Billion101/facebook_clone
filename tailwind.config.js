/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'facebook-blue': '#1877f2',
        'facebook-gray': '#f0f2f5',
      }
    },
  },
  plugins: [],
}