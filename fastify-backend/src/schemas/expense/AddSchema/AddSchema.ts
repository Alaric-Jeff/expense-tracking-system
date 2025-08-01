import {Type, Static} from '@sinclair/typebox'

export enum ExpenseCategory {
  food = 'food',
  transport = 'transport',
  entertainment = 'entertainment',
  bills = 'bills',
  utilities = 'utilities'
}

export const AddExpenseSchema = Type.Object({
  user_id: Type.Integer(),
  category: Type.Enum(ExpenseCategory),
  expense: Type.Number({ minimum: 0 }),
  description: Type.Optional(Type.String({ maxLength: 255 }))
});


export type AddExpenseType = Static<typeof AddExpenseSchema>;