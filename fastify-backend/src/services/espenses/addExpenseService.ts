import { AddExpenseType } from "../../schemas/expense/AddSchema/AddSchema.js";
import { FastifyInstance } from "fastify";
import { expenses } from "../../models/expenseModels.js";

async function AddExpenseService(fastify: FastifyInstance, body: AddExpenseType){

    const {
       user_id,
       category,
       expense,
        description
    } = body;

    try{

        const newExpense: string = String(expense)

        const result = await fastify.db.transaction(async (drizzle)=> {
            return await drizzle.insert(expenses).values({
                user_id,
                category,
                expense: newExpense,
                description
            })
        });
        return result.rows[0];
    }catch(err: unknown){
        throw new Error(`AddExpenseService() failed`)
    }
}

export default AddExpenseService;