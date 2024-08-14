/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  purge: ["./src/**/*.tsx"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "min-sm": "0.5rem",
      sm: "0.8rem",
      md: "0.75rem",
      lg: "0.875rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      "white-dark": "#FEF7EE",
      white: "#FFFF",
      beige: "#FEF7EE",
      black: "#191B1F",
      "purple-light": "#DEE9FC",
      pink: "#F9E3E2",
      orange: "#C18D30",
      green: "#4CA154",
      "green-light": "#E2FBE8",
      yellow: "#FDF9C9",
      "gray-dark": "#2A2D32",
      gray: "#3A3E44",
      "gray-light": "#7E878D",
      "gray-opacity": "rgba(25, 27, 31, .9)",
      "blue-light-opacity": "rgba(222, 233, 252, .9)",
      blue: "#3662E3",
      "blue-dark": "#1a3fac",
      "blue-light": "#DEE9FC",
      red: "#AA2E26",
      purple: "#B787F5",
    },
    extend: {
      fontFamily: {
        dm: ["var(--font-dm)"],
      },
      borderColor: ["valid", "invalid"],
      textColor: ["invalid"],
      animation: {
        "modal-in": ".5s ease forwards modalIn",
        "modal-out": ".5s ease forwards modalOut",
      },
      keyframes: {
        modalIn: {
          "0%": {
            opacity: 0,
          },
          "15%": {
            transform: "translateY(3rem) skew(5deg)",
          },
          "60%": { transform: "translateY(-3rem) skew(0)" },
          "100%": {
            transform: "translate(0) ",
            opacity: 1,
          },
        },
        modalOut: {
          "0%": {
            transform: "translate(0) rotateX(0)",
            opacity: 1,
          },
          "100%": {
            opacity: 0,
            transform: "translateY(-3rem)",
          },
        },
      },
    },
  },
  plugins: [],
};
