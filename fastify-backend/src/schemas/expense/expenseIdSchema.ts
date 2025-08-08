import { Type, Static } from "@sinclair/typebox";

export const expenseIdSchema = Type.Object({
    expense_id: Type.Integer()
})

export type expenseIdType = Static<typeof expenseIdSchema>;