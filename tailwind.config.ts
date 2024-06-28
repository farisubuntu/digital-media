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
    extend: {},
  },
  plugins: [addIconSelectors([ "clarity", "flowbite"])],
};
export default config;
