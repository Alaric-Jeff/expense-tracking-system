import GetAllExpenseService from "../../services/espenses/getAllExpenseService.js";
import { GetAllResponseType } from "../../schemas/expense/GetAllSchemaResponse.js";
import { FastifyRequest, FastifyReply } from "fastify";

const getAllExpenseController = async ({server, body}: FastifyRequest<{Body: GetAllResponseType}>, reply: FastifyReply) => {

    const {
        user_id
    } = body;

    try{
        const result = await GetAllExpenseService(server, {user_id});

        return reply.code(200).send({
            message: "successfuly fetched your expenses",
            success: true,
            data: result
        });

    }catch(err: unknown){
        server.log.error(`Error occured in controller: ${err}`)
        return reply.code(500).send({
            message: "Internal server error",
            success: false
        })
    }
};

export default getAllExpenseController;