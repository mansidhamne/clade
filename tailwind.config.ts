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
      },
      colors: {
        "primary": "#DC4A2D",
        "secondary": "#FCFCFC",
        "tertiary": "#FEF4F2",
        "text-primary": "#4F4F4F",
        "text-bold": "#3D3D3D",
        "text-secondary": "#888888",
        "neutral-gray":"#D1D1D1",
        "text-headings": "#6E6D6D",
        "text-teritary": "#344054",
        "divider" : "#E7E7E7",
        "navbar-text": "#B0B0B0",
      },
    },
  },
  plugins: [],
};

export default config;
