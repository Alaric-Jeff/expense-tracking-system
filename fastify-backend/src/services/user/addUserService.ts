import { FastifyInstance } from "fastify";
import { UserInput } from "../../schemas/user/userSchema.js";
import users_table from "../../models/userModel.js";
import { eq } from "drizzle-orm";

async function AddUserService(fastify: FastifyInstance, user: UserInput) {
    const {
        firstName,
        lastName,
        email,
        password
    } = user;

    const existing = await fastify.db.select().from(users_table).where(eq(users_table.email, email));

    if(existing){
        fastify.log.debug(`user already exists`)
        throw new Error(`User with email: "${email}" alreay exists`);
    };

    try{
        const newPassword = await fastify.bcrypt.hash(password)
        await fastify.db.transaction(async (drizzle)=> {
                drizzle.insert(users_table).values({
                firstName, 
                lastName,
                email,
                password: newPassword
            })
        });

    }catch(err: unknown){
        if(err instanceof Error){
            fastify.log.info(`Error occured in AddUserService(), reason: ${err.message}`)
        }else{
            fastify.log.info(`Unknown error occured, err: ${err}`)
        }
        throw new Error(`AddUserService() failed`);
    };
};

export default AddUserService;