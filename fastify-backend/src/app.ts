import Fastify from 'fastify'
import dotenv from 'dotenv'
import DrizzlePlugin from './plugins/DrizzlePlugin.js';
import { fastifyBcrypt } from 'fastify-bcrypt';

dotenv.config();

const fastify = Fastify({
    logger: true,
    http2: true
});

fastify.register(fastifyBcrypt, {
    saltWorkFactor: 12
});
fastify.register(DrizzlePlugin, {
    max: 20,
    maxLifetimeSeconds: 10
});

try{
    fastify.listen({
        port: Number(process.env.http_port),
        host: String(process.env.host),
    });
}catch(err: unknown){
    if(err instanceof Error){
        fastify.log.error(`Error occured while trying to run the server: ${err.message}`)
    }else{
        fastify.log.error(`Unknown error occured in running the server, err: ${err}`)
    }
    fastify.close().then(()=> {
        process.exit(1);
    });
};

