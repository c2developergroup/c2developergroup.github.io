/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        serif: "sans-serif",
      },
    },
    screens: {
      minimum: "320px",
      tiny: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1800px",
      "4xl": "2100px",
      mobl: { max: "480px" },
      resp: { max: "768px" },
      fluent: { max: "1024px" },
      tallratio: { raw: "(max-aspect-ratio: 3/2)" },
    },
  },
  darkMode: "class",
  plugins: [],
};
