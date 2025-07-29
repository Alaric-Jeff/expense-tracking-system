import { Type, Static } from "@sinclair/typebox";

export const UpdateUserBodySchema = Type.Object({
  user_id: Type.Integer(),
  firstName: Type.Optional(Type.Union([Type.String({ minLength: 3, maxLength: 30 }), Type.Null()])),
  lastName: Type.Optional(Type.Union([Type.String({ minLength: 2, maxLength: 30 }), Type.Null()])),
  password: Type.Optional(Type.Union([Type.String({ minLength: 9, maxLength: 30 }), Type.Null()]))
});

export type UpdateUserBodyType = Static<typeof UpdateUserBodySchema>;
