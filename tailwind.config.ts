import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f4f8ff",
          100: "#e6efff",
          200: "#c9dcff",
          300: "#9fbfff",
          400: "#6e98ff",
          500: "#3d71ff",
          600: "#1e51e6",
          700: "#153cb3",
          800: "#122f8a",
          900: "#10286f"
        }
      }
    }
  },
  plugins: []
};

export default config;
