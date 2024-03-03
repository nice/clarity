/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        "2xl": "1312px",
      },
      fontFamily: {
        body: ["Open Sans", "sans-serif"],
      },
      height: {
        "104": "26rem",
        "112": "28rem",
        "120": "30rem",
        "128": "32rem",
        "136": "34rem",
      },
    },
  },
  safelist: ["h-64", "h-96", "h-128", "rounded-xl"],
  plugins: [require("@tailwindcss/typography")],
};
