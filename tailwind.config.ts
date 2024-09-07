import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "metrapolis-light": ["metrapolis-light", "sans-serif"],
        "metrapolis-bold": ["metrapolis-bold", "sans-serif"],
        "metrapolis-semibold": ["metrapolis-semibold", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        col_change: {
          "0%,100%": {
            "background-image": "linaer-gradient(to right,#3A3A3A,#FD0000)",
          },
          "50%": {
            "background-image": "linaer-gradient(to right,#2A4B8A,#9747FF)",
          },
        },
      },
      animation: {
        colchange: "col_change 1s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
