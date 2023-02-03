/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#095590',
      'primary-light': '#59A5E3',
      'background': '#FFF',
      'foreground': '#095590',
      'link-white': '#D1E6F7',
      'yellow': '#EACC2D',

      'white': '#FFFFFF',
    },
    extend: {
      boxShadow: {
        'sm': '-11px -1px 34px #00000012',
        'xl': 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.07) -11px -1px 34px 0px',
      }
    }
  },
  plugins: [],
}
