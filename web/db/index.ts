import { env } from "./env";
import * as schema from "./schema";
import { MySql2Database, drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2";

declare global {
  var database: MySql2Database<typeof schema> | undefined;
}

let database: MySql2Database<typeof schema>;
let connection: ReturnType<typeof mysql.createConnection>;

if (env.NODE_ENV === "production") {
  connection = mysql.createConnection(env.DATABASE_URL);
  database = drizzle(connection);
} else {
  if (!global.database) {
    connection = mysql.createConnection(env.DATABASE_URL);
    global.database = drizzle(connection);
  }
  database = global.database;
}

export { database, connection };
