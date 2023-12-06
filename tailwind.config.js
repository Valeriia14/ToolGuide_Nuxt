/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily :{
        'sans': 'Sans-pro',
      },
      colors: {
        dark: {
          primary: "#291D32",
          secondary: "#CF75FF",
          strong :'#1A1220',
          light:'#44394D',
        },
        light: {
          primary: "#CF75FF", // pink
          secondary: "#291D32", // grey
          strong: '#F5E3FF',
          light :'#F7F1F5'
        },
      },
    },
  },
  plugins: [],
  
}

