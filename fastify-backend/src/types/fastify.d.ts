import { DrizzleD1Database } from 'drizzle-orm/node-postgres'; // or `DrizzlePostgreSQL` if you're using latest naming
import 'fastify';

declare module 'fastify' {
  interface FastifyInstance {
    db: ReturnType<typeof import('drizzle-orm/node-postgres').drizzle>;
  }
}
