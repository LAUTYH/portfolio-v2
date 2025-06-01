import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secundary: "#201cf5",
        darkBg: "#00032b"
      },
      backroundImage: {
        "gradient-cover": "linear-gradient(90.21deg, rgba(24, 54, 170, 0.5) -5.91%, rgba(74, 47, 253, 0.5) 111.58%)",
      },
    },
  },
  plugins: [],
};

export default config;
