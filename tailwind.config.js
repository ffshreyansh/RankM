/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'p-red': '#ee225d',
        'c-yellow': '#ffc843',
        'b-blue': '#2376ff',
        'p-pink': '#18af64',
        'text-gray': '#4c5968',
        'text-gray-2': '#9a9bb0'
      }
    },
  },
  plugins: [],
}
