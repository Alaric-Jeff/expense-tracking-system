import { userIdType } from "../../schemas/user/userIdSchema.js";
import users_table from "../../models/userModel.js";
import { FastifyInstance } from "fastify";
import { eq } from "drizzle-orm";

async function DeleteUserService(fastify: FastifyInstance, deleteId: userIdType){
    const{
        user_id
    } = deleteId;

    try{

        await fastify.db.transaction(async (drizzle)=> {
            await drizzle.delete(users_table).where(eq(users_table.user_id, user_id));
        });

        fastify.log.info(`DeleteUserService() success`);
        return;
    }catch(err: unknown){
        if(err instanceof Error){
            fastify.log.error(`Error occured in DeleteUserService(): ${err.message}`)
        }else{
            fastify.log.error(`Unknown error occured in DeleteUserService()`)
        }
        throw new Error(`DeleteUserService() failed`);
    }

};

export default DeleteUserService;