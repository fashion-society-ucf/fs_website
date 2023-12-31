/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:' "DM Sans", sans-serif;'  
      },
      fontSize:{
        "md": ["1.6rem", "1.3"],
        "lg":"2.2rem",
        "2xl": ["4rem", "1"]
      },
      spacing:{
        0: "0",
        1: "0.4rem",
        2: "0.8rem",
        3: "1.2rem",
        4: "1.6rem",
        5: "2rem",
        6: "2.4rem",
        7: "2.8rem",
        8: "3.2rem",  
        9: "3.6rem",  
        10: "4rem",  
        11: "4.4rem",
        12: "4.8rem"
      }
    },
  },
  plugins: [],
}
