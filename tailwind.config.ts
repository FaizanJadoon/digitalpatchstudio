import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#0B1230",
          800: "#0F1A46",
          700: "#1B3F8A",
        },
        accent: {
          400: "#38BDF8", // sky-400
        },
        ink: {
          900: "#FFFFFF",
          700: "rgba(255,255,255,0.9)",
          500: "rgba(255,255,255,0.7)",
        },
        surface: {
          card: "rgba(255,255,255,0.05)",
          stroke: "rgba(255,255,255,0.10)",
        },
      },
      borderRadius: {
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
};

export default config;
