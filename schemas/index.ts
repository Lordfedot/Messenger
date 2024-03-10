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
    .regex(/^(?=.*[a-z])(?=.*\d).{6,}$/, {
      message:
        "Password must contain at least one lowercase letter and one digit",
    }),
});

export const RegisterSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Minimum 3 characters required",
    })
    .max(18, {
      message: "Maximum 18 characters allowed",
    }),
  email: z.string().email({
    message: "Please use a valid email",
  }),
  password: z
    .string()
    .min(6, {
      message: "Minimum 6 characters required",
    })
    .regex(/^(?=.*[a-z])(?=.*\d).{6,}$/, {
      message:
        "Password must contain at least one lowercase letter and one digit",
    }),
});
