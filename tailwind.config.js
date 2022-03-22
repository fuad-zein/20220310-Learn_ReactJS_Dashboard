module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,svg}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    fontFamily: {
      sans: ["Poppins", "Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },

    extend: {
      colors: {
        "blue-custom": "#1B2A61",
        "gray-custom": "#B5BACF",
        "gray-lowbg": "#F8F8FC",
        "pink-custom": "#F6B8C4",
        "gray-low": "#F1F1F9",
        "pink-low": "#FCEBEE",
        "violet-custom": "#6161EF",
      },
    },
  },

  plugins: [],
};
