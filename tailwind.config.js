/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "title": "var(--title-font)",
        "text": "var(--text-font)",
        'category': 'var(--title-category)',
        'headings': 'var(--headings-font)',
        'new': 'var(--title-league-spartan)'
      }
    },
  },
  plugins: [
      require('@tailwindcss/aspect-ratio')
  ],
};
