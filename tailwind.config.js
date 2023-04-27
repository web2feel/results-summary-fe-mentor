/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "light-red":"hsl(0, 100%, 67%)",
        "orangy-yellow":"hsl(39, 100%, 56%)",
        "green-teal":"hsl(166, 100%, 37%)",
        "cobalt-blue":"hsl(234, 85%, 45%)"
      }
    },
  },
  plugins: [],
}

