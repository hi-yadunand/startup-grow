/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#17201b",
        leaf: "#1f7a4d",
        saffron: "#f59f30",
        skydeep: "#22577a",
        mist: "#f5f8f2"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(23, 32, 27, 0.12)"
      }
    }
  },
  plugins: []
};
