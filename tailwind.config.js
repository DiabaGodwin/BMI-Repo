const {nextui} = require('@nextui-org/theme');
/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(table|checkbox|spacer).js"
  ], 
  theme: { 
    extend: {}, 
  },
  plugins: [nextui()], 
}

