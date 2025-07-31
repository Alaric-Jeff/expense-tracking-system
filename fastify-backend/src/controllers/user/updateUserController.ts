import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateUserBodyType } from "../../schemas/user/updateBodySchema.js";
import UpdateUserService from "../../services/user/updateUser.js";
const UpdateUserController = async ({body, server}: FastifyRequest<{Body: UpdateUserBodyType}>, reply: FastifyReply) =>{

    const {
        user_id,
        firstName,
        lastName,
        password
    } = body;

    try{
        const updatedUser = await UpdateUserService(server, {
            user_id,
            firstName,
            lastName,
            password
        });

        return reply.code(200).send({
            message: "Succesfully updated your account",
            success: true, 
            user: updatedUser
        });

    }catch(err: unknown){
        return reply.code(500).send({
            message: "Internal server error",
            success: false
        })
    }
};

export default UpdateUserController;