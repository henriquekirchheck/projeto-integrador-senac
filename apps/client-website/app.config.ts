import { defineConfig } from "@tanstack/start/config";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  vite: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    plugins: () => [
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      tsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
    ],
  },
});
