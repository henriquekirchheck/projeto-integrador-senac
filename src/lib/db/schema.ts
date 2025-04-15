import { InferSelectModel } from "drizzle-orm";
import { pgTable, uuid } from "drizzle-orm/pg-core";

export const userTable = pgTable("user", {
  id: uuid("id").defaultRandom().primaryKey(),
});

export type User = InferSelectModel<typeof userTable>;
