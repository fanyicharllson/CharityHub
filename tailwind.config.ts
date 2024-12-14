import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        fadeInDelay: "fadeIn 1.5s ease-in-out",
        fadeInDelay2: "fadeIn 2s ease-in-out",
        bounce: "bounce 2s infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
