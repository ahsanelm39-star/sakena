import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: "#FCFBF8",
          100: "#F7F6F0",
          200: "#EFECE3",
          300: "#E4DEC8",
        },
        forest: {
          50: "#EEF3F1",
          100: "#D6E3DE",
          200: "#ADC7BD",
          300: "#7DA697",
          400: "#4D8070",
          500: "#29463F",
          600: "#223B35",
          700: "#1B2F2A",
          800: "#142420",
          900: "#0D1815",
        },
        sage: {
          50: "#F5F7F4",
          100: "#E6ECE4",
          200: "#CDD9CA",
          300: "#B8C9B4",
          400: "#AAB9A7",
          500: "#8FA38B",
          600: "#72876E",
        },
        terracotta: {
          50: "#FAF3F1",
          100: "#F3E3DF",
          200: "#E4C3BC",
          300: "#D4A59B",
          400: "#C38D7E",
          500: "#B07362",
          600: "#945949",
        },
        lavender: {
          50: "#FAF9FC",
          100: "#F2F0F7",
          200: "#DDD9E8",
          300: "#C5BED9",
        },
        sand: {
          50: "#FBF9F7",
          100: "#F4EFEA",
          200: "#E9E1D5",
          300: "#D9CEBF",
          400: "#C7B9A5",
        },
        charcoal: {
          50: "#F6F7F7",
          100: "#E3E5E4",
          200: "#C0C4C2",
          500: "#777F7A",
          700: "#454D4B",
          800: "#27312F",
          900: "#1A2220",
        },
      },
      fontFamily: {
        alexandria: ["var(--font-alexandria)", "sans-serif"],
        ibm: ["var(--font-ibm)", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(41, 70, 63, 0.05)",
        card: "0 10px 30px -4px rgba(41, 70, 63, 0.08)",
        elevated: "0 20px 40px -6px rgba(41, 70, 63, 0.12)",
      },
      backgroundImage: {
        "organic-pattern": "radial-gradient(circle at 10% 20%, rgba(170, 185, 167, 0.12) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(195, 141, 126, 0.08) 0%, transparent 40%)",
      },
    },
  },
  plugins: [],
};
export default config;
