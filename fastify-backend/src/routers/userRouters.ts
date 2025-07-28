import { FastifyInstance } from "fastify";
import { UserSchema } from "../schemas/user/userSchema.js";
import ResponseSchema from "../schemas/ErrorResponseSchema.js";
import AddUserController from "../controllers/user/addUserController.js";

export const UserRoutes = async (fastify: FastifyInstance) =>{
    fastify.route({
        url: '/add-user',
        method: 'POST',
        schema: {
            body: UserSchema, response: {
                500: ResponseSchema, 
                200: ResponseSchema
            }
        },
        handler: AddUserController
    })
}