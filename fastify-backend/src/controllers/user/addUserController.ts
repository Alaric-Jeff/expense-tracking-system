import { FastifyReply, FastifyRequest } from "fastify";
import { UserInput } from "../../schemas/user/userSchema.js";
import AddUserService from "../../services/user/addUserService.js";
import { DatabaseError } from "pg";

const AddUserController = async ({body, server}: FastifyRequest<{Body: UserInput}>, reply: FastifyReply) => {

    const {
        firstName,
        lastName,
        email,
        password
    } = body;

    try{
        await AddUserService(server, {firstName, lastName, email, password});
        reply.code(200).send({
            message: "Successfully created your account",
            success: true
        })
    }catch(err: unknown){
        server.log.error(`Internal server error: ${err}`)
        reply.code(500).send({
            message: "Internal server error",
            success: false
        })
    };
};

export default AddUserController;