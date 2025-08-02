import {Type, Static} from '@sinclair/typebox'

const AddSchemaResponse200 = Type.Object({
  message: Type.String(),
  success: Type.Boolean(),
  data: Type.Object({
    expense_id: Type.Number(),
    user_id: Type.Number(),
    category: Type.Union([
      Type.Literal('food'),
      Type.Literal('transport'),
      Type.Literal('entertainment'),
      Type.Literal('bills'),
      Type.Literal('utilities'),
    ]),
    expense: Type.String(), 
    description: Type.String(),
    date: Type.String(), 
  }),
});