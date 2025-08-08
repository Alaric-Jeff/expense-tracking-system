import { Type, Static } from "@sinclair/typebox";
import { ExpenseCategory } from "./AddSchema/AddSchema.js";

export const GetAllResponseSchema = Type.Object({
    expense_id: Type.Integer(),
    user_id: Type.Integer(),
    category: Type.Enum(ExpenseCategory),
    expense: Type.Number(),
    description: Type.String(),
    date: Type.Date()
});

export type GetAllResponseType = Static<typeof GetAllResponseSchema>;

