import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import animate from "tailwindcss-animate";
import textFill from "tailwindcss-text-fill";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: [
          ["Inter var", ...defaultTheme.fontFamily.sans],
          { fontFeatureSettings: '"zero" 1, "ss01" 1, "ss08" 1' },
        ],
      },
      fontSize: {
        dynamic: "clamp(1.875rem, -18.7500rem + 51.5625vw, 6rem)",
      },
      // Uses indigo-600 and sky-500 as the color stops. --link-hover-bg is defined on the element for now.
      backgroundImage: {
        "link-hover":
          "linear-gradient(135deg, #4f46e5 0%, #0ea5e9 40%, var(--link-hover-bg) 40.01%, var(--link-hover-bg) 80%)",
      },
      backgroundSize: {
        "link-hover": "300%",
      },
      backgroundPosition: {
        "link-hover": "65% 0",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "link-hover-in": {
          from: { "background-position": "65% 0" },
          to: { "background-position": "0% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "link-hover-in": "link-hover-in 0.5s ease forwards",
      },
    },
  },
  plugins: [typography, animate, textFill],
} satisfies Config;
