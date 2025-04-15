import { config } from "dotenv";
import { expand } from "dotenv-expand";
import { defineConfig } from "drizzle-kit";
import assert from "node:assert";
import { join } from "node:path";
import { cwd } from "node:process";

expand(
  config({
    path: [
      join(cwd(), ".env"),
      join(cwd(), ".env"),
      join(cwd(), `.env.development`),
      join(cwd(), `.env.development.local`),
    ],
  }),
);

assert(
  typeof process.env.DATABASE_URL === "string",
  "DATABASE_URL is not defined",
);

export default defineConfig({
  out: "./drizzle",
  schema: "./src/lib/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
