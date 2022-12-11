/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  plugins: [
    require("@tailwindcss/typography"),
    {
      autoprefixer: {},
    },
  ],
  theme: {},
  darkMode: "class",
};
