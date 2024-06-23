import { nextui } from "@nextui-org/react";

/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#FFF",
            foreground: "#737CCF",
            primary: {
              100: "#E6E9FC",
              200: "#CDD3FA",
              300: "#B0B8F0",
              400: "#969EE2",
              500: "#737CCF",
              600: "#545CB2",
              700: "#394195",
              800: "#242A78",
              900: "#161A63",
              DEFAULT: "#737CCF",
            },
          },
        },
      },
    }),
  ],
};
