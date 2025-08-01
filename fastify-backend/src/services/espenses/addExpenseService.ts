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

        await fastify.db.transaction(async (drizzle)=> {
            await drizzle.insert(expenses).values({
                user_id,
                category,
                expense: newExpense,
                description
            })
        });
    }catch(err: unknown){
        throw new Error(`AddExpenseService() failed`)
    }
}

export default AddExpenseService;