import { pgTable, integer, varchar, timestamp } from "drizzle-orm/pg-core";

const users_table = pgTable('users_table', {
    user_id: integer().primaryKey().generatedAlwaysAsIdentity(),
    firstName: varchar({ length: 255 }).notNull(),
    lastName: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
    password: varchar({ length: 255 }).notNull(),
    created_at: timestamp({ mode: 'date' }).defaultNow(), 
});

export default users_table;
