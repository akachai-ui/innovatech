import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#48e5c8',
          500: '#2bccaf', // Primary Brand Color
          600: '#20a890',
          700: '#1a8674',
          800: '#186a5d',
          900: '#16574d',
          accent: '#2bccaf',
          glow: '#2bccaf'
        }
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #2bccaf 0%, #1a8674 100%)',
        'hero-glow': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(43, 204, 175, 0.25), rgba(255, 255, 255, 0))',
      }
    },
  },
  plugins: [],
};

export default config;
