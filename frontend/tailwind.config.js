/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        gray: {
          500: "#5C5C70",
          600: "#5C5C7B",
          700: "#333333",
          800: "#1F1F22",
          650: "#101012",
          900: "#09090A",
        },
        red: {
          400: "#F14D4D",
          500: "#FF6B6B",
        },
        green: {
          500: "#00FF75",
        },
        severity: {
          primary: "#1E90FF",
          low: "#53DF85",
          medium: "#FFD700",
          high: "#FF8D1E",
          dangerous: "#FF6B6B",
        },

        black: "#000000",
        white: "#FFFFFF",
        primary: "#1E90FF",
        "primary-400": "#006CC4",
        "primary-500": "#004988",
        secondary: "#FF8D1E",
        "dark-1": "#000000",
        "dark-2": "#09090A",
        "dark-3": "#101012",
        "dark-4": "#1F1F22",
        "light-1": "#FFFFFF",
        "light-2": "#EFEFEF",
        "light-3": "#7878A3",
        "light-4": "#5C5C7B",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        serif: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
