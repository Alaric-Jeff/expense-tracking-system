import { Pool, PoolConfig } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import dotenv from 'dotenv';
import fp from 'fastify-plugin';
import { FastifyInstance } from 'fastify';

dotenv.config();

const DrizzlePlugin = async (fastify: FastifyInstance, opts: PoolConfig) => {
  try {
    // Use the passed-in opts (or fallback to env connection string)
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ...opts,
    });

    const client = await pool.connect();
    fastify.log.info('Successfully connected to the database.');
    client.release();

    const db = drizzle(pool);
    fastify.decorate('db', db);

    fastify.addHook('onClose', async () => {
      await pool.end();
      fastify.log.info('Database pool closed.');
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      fastify.log.error(`Error registering Drizzle plugin: ${err.message}`);
    } else {
      fastify.log.error('Unknown error during Drizzle plugin registration.');
    }
    throw err;
  }
};

export default fp(DrizzlePlugin);
