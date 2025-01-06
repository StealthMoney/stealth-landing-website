import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          100: "#F7931A",
        },
        black: {
          200: "#CCCCCC",
          500: "#494949",
          600: "#2B2B2B",
          700: "#080808",
        },
        white: {
          100: "#FFFFFF",
          200: "#D4D4D4",
          300: "#AAAAAA",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"],
        Satoshi: ["var(--satoshi)"],
        SatoshiItalic: ["var(--satoshi-italic)"],
      },
    },
  },
  plugins: [],
};
export default config;
