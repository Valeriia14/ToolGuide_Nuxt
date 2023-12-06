/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        dark: {
          primary: "#1C1D20",
          secondary: "#C559FF",
        },
        light: {
          primary: "#C559FF", // pink
          secondary: "#1C1D20", // grey
        },
      },
    },
  },
  conntent: [
    "components/**/*.{vue,js,ts}",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    "composables/**/*.{js,ts}",
    "plugins/**/*.{js,ts}",
    "App.{js,ts,vue}",
    "app.{js,ts,vue}",
    "Error.{js,ts,vue}",
    "error.{js,ts,vue}",
    "content/**/*.md",
  ],
  plugins: [require("@tailwindcss/forms")],
};

