import { FastifyInstance } from "fastify";
import { UserRoutes } from "./userRouters.js";
const RegisterRouters = async (fastify: FastifyInstance) => {
    await fastify.register(UserRoutes, {prefix: "user"});
};

export default RegisterRouters;