import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#001164",
          50: "#eef0fa",
          100: "#d4d8f0",
          400: "#3745a0",
          600: "#001d8a",
          700: "#001164",
          800: "#000d4d",
          900: "#000836",
        },
        maroon: {
          DEFAULT: "#ac1116",
          50: "#fbeaea",
          100: "#f3c6c7",
          400: "#c8383d",
          600: "#ac1116",
          700: "#8c0d11",
          800: "#6d0a0d",
        },
        cream: "#F7F5F1",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(0,17,100,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,17,100,0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
