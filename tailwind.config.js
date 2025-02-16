/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        '2xl': '1512px', // override 1536 default to 1512
      },
      container: {
        center: true
      },
    },
  },
  plugins: [],
};
