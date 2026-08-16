/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#0B1526",
          900: "#101B33",
          800: "#16264A",
          700: "#1E3363",
          600: "#28407E",
        },
        blue: {
          600: "#2F5FDB",
          500: "#3E6FEF",
          100: "#DCE6FB",
          50: "#F2F6FD",
        },
        ink: "#101826",
        slate: {
          600: "#5B6B84",
          400: "#8B98AD",
          200: "#DDE3ED",
          100: "#EDF1F7",
        },
        danger: {
          600: "#DC2626",
          50: "#FDECEC",
        },
        success: {
          600: "#16A34A",
          50: "#EAF7EF",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(16, 27, 51, 0.04), 0 8px 24px -12px rgba(16, 27, 51, 0.12)",
        "card-hover": "0 4px 8px rgba(16, 27, 51, 0.06), 0 16px 32px -12px rgba(16, 27, 51, 0.18)",
      },
    },
  },
  plugins: [],
};
