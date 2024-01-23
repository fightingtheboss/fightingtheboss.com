import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          ["Inter var", ...defaultTheme.fontFamily.sans],
          { fontFeatureSettings: '"zero" 1, "ss01" 1, "ss08" 1' },
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
