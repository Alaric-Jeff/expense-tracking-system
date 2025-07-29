import { FastifyInstance } from "fastify";
import { UserSchema } from "../schemas/user/userSchema.js";
import { userIdSchema } from "../schemas/user/userIdSchema.js";
import ResponseSchema from "../schemas/ErrorResponseSchema.js";
import AddUserController from "../controllers/user/addUserController.js";
import DeleteUserController from "../controllers/user/deleteUserController.js";

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

    fastify.route({
        url: '/delete-user',
        method: 'POST',
        schema: {
            body: userIdSchema, 
            response: {
                200: ResponseSchema,
                500: ResponseSchema
            }
        },
        handler: DeleteUserController
    });
};