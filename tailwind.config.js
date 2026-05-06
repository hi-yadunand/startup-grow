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
        ink: "#121212",
        soot: "#1c1c1c",
        acid: "#d7ff00",
        cream: "#fdfaf8",
        lavender: "#d9dced",
        blush: "#f4e0e0",
        mint: "#d8e9e4",
        leaf: "#1f7a4d",
        saffron: "#f59f30",
        skydeep: "#22577a",
        mist: "#f5f8f2"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(23, 32, 27, 0.12)",
        arolax: "0 30px 80px rgba(18, 18, 18, 0.24)"
      }
    }
  },
  plugins: []
};
