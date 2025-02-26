/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1C3D5A",
        midnightOcean: "#17344d",
        errigalWhite: "#F0F2F5",
        whiteSmoke: "#f6f6f6",
        walrus: "#9b9b9e",
        olypurWhite: "#d6d6d7",
        iron: "#5e5e60",
        cocoBlack: "#1b1b1c",
      },
    },
  },
  plugins: [],
};
