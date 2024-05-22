import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "green-radiant": "radial-gradient(circle, rgba(41,167,59,1) 0%, rgba(21,21,21,1) 58%)",
        "green-radiant2": "radial-gradient(circle, rgba(41,167,59,1) 0%, rgba(21,21,21,1) 35%)",
        "green-radiant3": "radial-gradient(circle, rgba(41,167,59,1) 0%, rgba(21,21,21,1) 45%)"
      },
      colors: {
        "primary": "#29a73b",
        "darkGreen": "#133628",
        "dark1": "#151515",
        "gray1": "#282828"
      }
    },
  },
  plugins: [],
};
export default config;
