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
        navy: {
          900: '#0a1128',
          800: '#0f1c3f',
          700: '#1a2645',
        },
        // =============================================================
        // OLD PALETTE — preserved for backwards compatibility.
        // electric.blue / electric.yellow names retained,
        // but mapped to new trust-coded colors below.
        //   electric.blue  was #00d4ff  (bright cyan / tech)
        //   electric.yellow was #ffd60a  (high-energy yellow)
        // =============================================================
        electric: {
          blue: '#3b82f6',    // steel blue — grounded, reliable, professional
          yellow: '#d97706',  // warm terracotta / burnt orange — reliable contractor
        },
        // New explicit trust palette (use these going forward in new code)
        trust: {
          blue: '#3b82f6',
          orange: '#d97706',
          green: '#16a34a',  // for verification / trust badges (reserved for future use)
          cream: '#faf7f2',  // warm off-white for honest text blocks
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
