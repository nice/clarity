/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      "2xl": "1526px",
    },
    container: {
      padding: "2rem",
    },
    extend: {},
  },
  plugins: [],
};
