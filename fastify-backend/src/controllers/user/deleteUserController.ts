import { FastifyRequest, FastifyReply } from "fastify";
import { userIdType } from "../../schemas/user/userIdSchema.js";
import DeleteUserService from "../../services/user/deleteUserService.js";


const DeleteUserController= async ({body, server}: FastifyRequest<{Body: userIdType}>, reply: FastifyReply)=>{

    const{user_id} = body

    try{
        await DeleteUserService(server, {user_id});
        return reply.code(200).send({
            message: "Successfuly deleted account",
            success: true
        });
    }catch(err: unknown){
        return reply.code(500).send({
            message: "Internal server error", 
            success: false
        });
    }
};

export default DeleteUserController;