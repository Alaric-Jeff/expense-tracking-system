import { FastifyRequest, FastifyReply } from "fastify";
import AddExpenseService from "../../services/espenses/addExpenseService.js";
import { AddExpenseType } from "../../schemas/expense/AddSchema/AddSchema.js";

const AddExpenseController = async (
  { body, server }: FastifyRequest<{ Body: AddExpenseType }>,
  reply: FastifyReply
) => {
  const { user_id, category, expense, description } = body;

  try {
    const newExpense = await AddExpenseService(server, {
      user_id,
      category,
      expense,
      description,
    });

    return reply.code(200).send({
      message: "Successfully created an expense record",
      success: true,
      data: newExpense,
    });
  } catch (err: unknown) {

    return reply.code(500).send({
      message: "Failed to create an expense record",
      success: false,
      error: err instanceof Error ? err.message : "Unknown error",
    });
  }
};

export default AddExpenseController;
