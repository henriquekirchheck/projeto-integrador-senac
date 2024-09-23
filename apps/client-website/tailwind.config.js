// @ts-check
import catppuccin from "@catppuccin/tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        script: ["'Dancing Script'"],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "'Apple Color Emoji'",
          "'Segoe UI Emoji'",
          "'Segoe UI Symbol'",
          "'Noto Color Emoji'",
        ],
      },
      transitionProperty: {
        inset: ["top", "bottom", "left", "right", "inset"].join(" "),
        layout: [
          "border-top",
          "border-left",
          "border-right",
          "border-bottom",
          "padding",
          "margin",
        ].join(" "),
      },
    },
    data: {
      active: 'status="active"',
    },
  },
  plugins: [catppuccin({ defaultFlavour: "mocha", prefix: "ctp" })],
};
