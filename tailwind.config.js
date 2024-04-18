/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{svelte,js,ts,jsx,tsx}",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  theme: {
    extend: {},
  },
};
