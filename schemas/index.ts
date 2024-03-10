import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Please use a valid email",
  }),
  password: z
    .string()
    .min(6, {
      message: "Minimum 6 characters required",
    })
    .regex(/^(?=.*[a-z])(?=.*\d).{8,}$/, {
      message:
        "Password must contain at least one lowercase letter and one digit",
    }),
});
