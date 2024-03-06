/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          white: "#FDFDFD",
          gray25: "#646464",
          gray50: "#9E9E9E",
          gray75: "#E1E1E1",
          black: "#1F1F1F",
        },
        primary: {
          main: "#2B2F4C",
          25: "#4e568a",
          50: "#8289b8",
          75: "#c1c4dc",
        },
        secondary: {
          main: "#E84546",
          25: "#ee7374",
          50: "#f3a2a2",
          75: "#f9d0d1",
        },
        tertiary: {
          main: "#8F3747",
          25: "#be5669",
          50: "#d48e9b",
          75: "#e9c7cd",
        },
        forth: {
          main: "#53364A",
          25: "#8b5b7c",
          50: "#b58ea9",
          75: "#dac6d4",
        },
        text: {
          white: "#FFFFFF",
        },
        gray: {
          0: "#FCFCFC",
        },
      },
    },
  },
  plugins: [],
};
