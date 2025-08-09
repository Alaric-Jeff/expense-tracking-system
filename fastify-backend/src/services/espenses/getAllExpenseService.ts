import { FastifyInstance } from "fastify";
import { userIdType } from "../../schemas/user/userIdSchema.js";
import { expenses } from "../../models/expenseModels.js";
import { eq } from "drizzle-orm";

async function GetAllExpenseService(fastify: FastifyInstance, id: userIdType) {
    const { user_id } = id;
    try {
        const result = await fastify.db.transaction(async (drizzle) => {
            return await drizzle
                .select({
                    expense_id: expenses.expense_id,
                    category: expenses.category,
                    expense: expenses.expense,
                    description: expenses.description,
                    date: expenses.date
                })
                .from(expenses)
                .where(eq(expenses.user_id, user_id)); 
        });

        return result;
    } catch (err: unknown) {
        if (err instanceof Error) {
            fastify.log.info("Error in GetAllExpenseService():", err.message);
        } else {
            fastify.log.info("Unknown error in GetAllExpenseService():", err);
        }
        throw new Error("getAllExpenseService() failed, err: " + err);
    }
};

export default GetAllExpenseService;
