import { pgTable, integer, varchar, timestamp, pgEnum, numeric, index } from "drizzle-orm/pg-core";
import users_table from "./userModel.js";

export const expense_category = pgEnum('expense', ['food', 'transport', 'entertainment', 'bills', 'utilities'])

export const expenses = pgTable('expenses', {
    expense_id: integer().primaryKey().generatedAlwaysAsIdentity(),
    user_id: integer().references(() => users_table.user_id).notNull(),
    category: expense_category().notNull(),
    expense: numeric({ precision: 10, scale: 2 }).notNull().default('0.00'),
    description: varchar({ length: 255 }).default("No description"),
    date: timestamp({ mode: "date" }).defaultNow()
}, 
(table) => {
    return {
        userIdIdx: index('user_id_idx').on(table.user_id),
        categoryIdx: index('category_idx').on(table.category),
        dateIdx: index('date_idx').on(table.date),
    };
});


