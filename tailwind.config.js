/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      s: "390px",
    },
    extend: {
      fontFamily: {
        vazirmatn: "Vazirmatn",
      },
      screens: {
        sn: "390px", // تعریف یک برنامه رسپانسیو برای عرض‌های کمتر از 350 پیکسل
      },
      colors: {
        neutral: {
          white: "#FDFDFD",
          gray25: "#646464",
          gray50: "#9E9E9E",
          gray75: "#E1E1E1",
          black: "#1F1F1F",
          shop: "#F9F9F9",
          gray: "#414457",
          white12: "#FDFDFD1F",
          50: "#FDFDFD80 ",
        },
        primary: {
          main: "#2B2F4C",
          25: "#4e568a",
          50: "#8289b8",
          75: "#c1c4dc",
          85: "#2B2F4CD9",
          35: "#2B2F4C59",
          20: "#CCCCCC33",
          gray: "#F0F0F0",
          60: "#FDFDFD99",
          70: "#D9D9D9B2",
          rectengle: "#313763",
          gray2: "#4C4C4C",
        },
        secondary: {
          main: "#E84546",
          25: "#ee7374",
          50: "#f3a2a2",
          75: "#f9d0d1",
          0: "#D95051",
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
        fifth: {
          0: "#8EC66B",
        },
        text: {
          white: "#FFFFFF",
        },
        gray: {
          0: "#FCFCFC",
        },
        border: {
          10: "#0000001A",
          25: "#00000040",
          57: "#00000091",
        },
      },
    },
  },
  plugins: [],
};
