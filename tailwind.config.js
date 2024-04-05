/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "[candy]": "url('/assets/images/background candy.jpg')",
        "[square]": "url('/assets/images/background square.jpg')",
        "[master]": "url('/assets/images/bakcground.jpg')",
      },
    },
  },
  plugins: [],
};
