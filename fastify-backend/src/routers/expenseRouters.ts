import { FastifyInstance } from "fastify"
import AddExpenseController from "../controllers/expense/addExpense.js";
import { AddExpenseSchema, AddExpenseType } from "../schemas/expense/AddSchema/AddSchema.js";
export const expenseRouters = async (fastify: FastifyInstance)=>{
    fastify.route({
        url: '/add-expense',
        method: 'POST',
        schema: {
            body: AddExpenseSchema,
            response: {
                200: {
                    type: 'object'
                }
            }
        },
        handler: AddExpenseController
    });
}