/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: [
      {
        pacu_theme: {
          "primary": "#d09615",
          "secondary": "#003262",
          "accent": "#fff550",
          "neutral": "#2b3440",
          "base-100": "#ffffff",
          "info": "#00b5ff",
          "success": "#00a96e",
          "warning": "#ffbe00",
          "error": "#ff5861",
        }
      }
    ]
  }
}