/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        "2xl": "1280px",
      },
      fontFamily: {
        body: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
