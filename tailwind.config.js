/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        ladingPage: '#ebfafb',
        prayerTime: '#ebfafb',
        popularCourses: '#f5fbfd',
        needHelp: '#f5fbfd',
        footer: '#f5fbfd',
        followUs: '#f5fbfd',
        button: "#00D7D8"
      },
      colors: {
        primary: "#b91c1c",
        secondary: "#030712",
        headingOne: "#242f6c",
        headingSix: "#242f6c",
        paragraph: "#6e7070",
        navlinks: "#6e7070",
        footerHeadings: "#575252"
      },

      padding: {
        p5p: "5%",
        px5p: "0 5%",
        py5p: "5% 0",
        p10p: "10%",
        px10p: "0 10%",
        py10p: "10% 0",
      }
    },
  },
  plugins: [],
}