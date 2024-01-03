/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // font family
      fontFamily: {
        'pop`': ['Poppins', 'sans-serif'],
        'vollkorn`': ['Vollkorn', 'serif'],
      },
      // font family

      // colors
      colors: {
        'primary': '#00413D',
        'btnColor': '#FF5136',
        'bannerBg': '#F2F6F7',
      
      },
      // colors

      // max width
      spacing: {
        'container': '1170px',
        
      },
      // max width
    },
  },
  plugins: [],
}

