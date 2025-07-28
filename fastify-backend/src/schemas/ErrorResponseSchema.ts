import { Type } from "@sinclair/typebox";

const ResponseSchema = Type.Object({
    message: Type.String(),
    success: Type.Boolean()
});

export default ResponseSchema;