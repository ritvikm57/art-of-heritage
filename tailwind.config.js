/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        linen: '#F5F0E8',
        ink: '#1A1614',
        terracotta: '#B85C38',
        'custom-indigo': '#2D3561',
        gold: '#C9952A',
        sage: '#6B8F71',
        surface: '#FDFAF5',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'serif'],
        dm: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
