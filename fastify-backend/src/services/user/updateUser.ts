import { FastifyInstance } from "fastify";
import { UpdateUserBodyType } from "../../schemas/user/updateBodySchema.js";
import users_table from "../../models/userModel.js";
import { eq } from "drizzle-orm";

async function UpdateUserService(fastify: FastifyInstance, body: UpdateUserBodyType) {
  try {
    const { user_id, ...rest } = body;
    const updates: Record<string, any> = {};
    for (const [key, value] of Object.entries(rest)) {
      if (value !== undefined) {
        updates[key] = value;
      }
    }

    if (Object.keys(updates).length === 0) {
      fastify.log.warn("No update fields provided.");
      return;
    }

    const updatedUser = await fastify.db
      .update(users_table)
      .set(updates)
      .where(eq(users_table.user_id, user_id)).returning({
        user_id: users_table.user_id,
        firstName: users_table.firstName,
        lastName: users_table.lastName,
      })

    return updatedUser;

  } catch (err: unknown) {
    if (err instanceof Error) {
      fastify.log.error(`Error occurred in update service: ${err.message}`);
    } else {
      fastify.log.error(`Unknown error occurred in update service.`);
    }
    throw new Error(`UpdateUserService() failed`);
  }
}

export default UpdateUserService;
