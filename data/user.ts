import client from "@/lib/prismadb";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await client.user.findUnique({ where: { email } });
    return user;
  } catch (error) {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await client.user.findUnique({ where: { id } });
  } catch (error) {
    return null;
  }
};
