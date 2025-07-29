import { FastifyInstance } from "fastify";

async function UpdateUserService(fastify: FastifyInstance){
    try {
        
    } catch (err: unknown) {
      if(err instanceof Error){
        fastify.log.error(`Error occured in update service, err: ${err.message}`)
      } else{
        fastify.log.error(`Unknown error occured in update service, err: ${err}`)
      } 
      throw new Error(`UpdateUserService() failed`)
    }
};

export default UpdateUserService;