import { z, ZodType } from "zod";
import { LoginTypes } from "../types/Login.types";

export const LoginSchemas: ZodType<LoginTypes> = z.object({
  username: z.string(),
  password: z.string(),
});
export type LoginSchemaDTO = z.infer<typeof LoginSchemas>;
