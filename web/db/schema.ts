import { mysqlTable, serial } from "drizzle-orm/mysql-core";

export const comments = mysqlTable("comments_table", {
  id: serial().primaryKey(),
});
