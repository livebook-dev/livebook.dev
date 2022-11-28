module.exports = {
  content: ["./src/**/*.html", "./src/**/*.css", "./src/**/*.js"],
  theme: {
    fontFamily: {
      sans: ["Inter, sans-serif"],
      mono: ["JetBrains Mono"],
    },
    extend: {
      colors: {
        blue: {
          50: "#f5f7ff",
          100: "#ecf0ff",
          200: "#d8e0ff",
          300: "#b2c1ff",
          400: "#8ba2ff",
          500: "#6583ff",
          600: "#3e64ff",
          700: "#2d4cdb",
          800: "#1f37b7",
          900: "#132593",
        },
        gray: {
          50: "#f8fafc",
          100: "#f0f5f9",
          200: "#e1e8f0",
          300: "#cad5e0",
          400: "#91a4b7",
          500: "#61758a",
          600: "#445668",
          700: "#304254",
          800: "#1c2a3a",
          900: "#0d1829",
        },
      },
      gridTemplateColumns: {
        'it-xl-5': 'repeat(5, minmax(256px, 256px))',
        'it-xl-4': 'repeat(4, minmax(256px, 256px))',
        'it-md-5': 'repeat(5, minmax(200px, 200px))',
        'it-md-4': 'repeat(4, minmax(200px, 200px))',
        'it-2': 'repeat(auto-fit, minmax(112px, 1fr))'
      }
    },
    screens: {
      sm: "640px",
      maxsm: { min: "100px", max: "767px" },
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
