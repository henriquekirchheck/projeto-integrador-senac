import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import assert from "node:assert";
import { Pool } from "pg";

assert(
  typeof import.meta.env.DATABASE_URL === "string",
  "DATABASE_URL is not defined",
);

const pool = new Pool({
  connectionString: import.meta.env.DATABASE_URL,
});
export const db = drizzle({ client: pool });
