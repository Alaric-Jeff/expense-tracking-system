import { FastifyInstance } from "fastify"
import AddExpenseController from "../controllers/expense/addExpense.js";
import { AddExpenseSchema } from "../schemas/expense/AddSchema/AddSchema.js";
import { AddSchemaResponse200 } from "../schemas/expense/AddSchema/AddSchemaResponse.js";
export const expenseRouters = async (fastify: FastifyInstance)=>{
    fastify.route({
        url: '/add-expense',
        method: 'POST',
        schema: {
            body: AddExpenseSchema,
            response: {
                200: AddSchemaResponse200
            }
        },
        handler: AddExpenseController
    });
}