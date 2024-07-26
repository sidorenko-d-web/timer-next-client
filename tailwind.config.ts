import type { Config } from "tailwindcss";

import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors:{
      'gray-bg':'#1f1f1f',
      'dark-gray-bg':'#131313',
      'best-time-color':'#35973F',
      'violet-dec':'#CA34C4',
      ...colors
    }
  },
  plugins: [],
};
export default config;
