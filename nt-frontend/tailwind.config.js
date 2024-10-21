/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nt-red': '#FF0000',  // Adjust this to match the exact red in the NT logo
        'nt-blue': '#0000FF', // Adjust this to match the exact blue in the NT logo
      },
    },
  },
  plugins: [],
}