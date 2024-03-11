"use server";
import bcrypt from "bcryptjs";
import { z } from "zod";

import { getUserByEmail } from "@/data/user";
import { RegisterSchema } from "@/schemas";
import client from "@/lib/prismadb";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { password, email, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email)
  if (existingUser) {
    return { error: "User with this email is already created" };
  }

  await client.user.create({ data: { name, hashedPassword, email } });

  return { success: "Success" };
};
