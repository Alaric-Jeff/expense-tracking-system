import { FastifyInstance } from "fastify";
import { UserRoutes } from "./userRouters.js";
import { expenseRouters } from "./expenseRouters.js";
const RegisterRouters = async (fastify: FastifyInstance) => {
    await fastify.register(UserRoutes, {prefix: "user"});
    await fastify.register(expenseRouters, {prefix: "expense"})
};

export default RegisterRouters;