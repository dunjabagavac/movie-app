/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,rs,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        eaire_black: '#171E13',
        dark_eaire_black: '#192115',
        dark_green: '#1E2819',
        pale_white: '##f3f3f3',
        black_shadow: '#000306',
        pa_green: '#1C2E12',
        moss_green: '#3B6226',
        forest_green: '#568C39',
        anti_flash_white: '#F5F5F5'
      }
    },
    fontFamily: {
      saira: ['Saira, sans-serif']
    }
  },
  plugins: []
}
