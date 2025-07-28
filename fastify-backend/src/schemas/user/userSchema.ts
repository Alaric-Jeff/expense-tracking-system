import { Type, Static } from "@sinclair/typebox";

const UserSchema = Type.Object({
   user_id: Type.Union([Type.Number(), Type.Null(), Type.Undefined()]),
   firstName: Type.String({minLength: 3, maxLength: 30}),
   lastName: Type.String({minLength: 2, maxLength: 30}),
   email: Type.String({minLength: 9, maxLength: 30, format: 'email'}),
   password: Type.String({minLength: 9, maxLength: 30})
});

type UserInput = Static<typeof UserSchema>;

export {UserSchema, UserInput};
