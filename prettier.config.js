// @ts-check
import prettierConfigCustom from "@repo/prettier-config-custom";

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
export default {
  ...prettierConfigCustom,
  plugins: ["prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "apps/client-website/**/*",
      options: {
        tailwindConfig: "apps/client-website/tailwind.config.js",
      },
    },
  ],
};
