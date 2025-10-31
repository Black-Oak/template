/** @type {import('tailwindcss').Config} */
export default {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0b0b11",
        card: "rgba(255,255,255,0.08)",
        borderglass: "rgba(255,255,255,0.12)",
        primary: { 500: "#7c3aed", 400: "#a855f7", 300: "#c084fc" },
        accent: { 500: "#f472b6", 400: "#fb7185", 300: "#fda4af" },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.35)",
        glass: "0 6px 20px rgba(124,58,237,0.08)",
      },
      backdropBlur: { xs: "6px" },
      borderRadius: { "2xl": "1rem", "3xl": "1.25rem" },
    },
  },
  plugins: [],
};
