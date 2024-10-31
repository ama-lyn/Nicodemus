import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"var(--primary)",
        secondary:"var(--secondary)",
        black:"var(--black)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        white:"var(--white)",
        darkGray:"var(--dark-gray)",
        gray:"var(--grey)",
      },
    },
  },
  plugins: [],
};
export default config;
