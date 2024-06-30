import type { Config } from "tailwindcss";
import { addIconSelectors } from "@iconify/tailwind";
/** @type (import('tailwindcss').Config) */
const config: Config = {
  content: [
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        border:'background ease infinite',
      },
      keyframes: {
        background: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [addIconSelectors([ "clarity", "flowbite"])],
};
export default config;
