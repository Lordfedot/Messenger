import { auth } from "@/auth";
import client from "@/lib/prismadb";

const useUsers = async () => {
  const session = await auth();

  if (!session?.user?.email) {
    return [];
  }

  try {
    const users = await client.user.findMany({
      where: { NOT: { email: session.user.email } },
      orderBy: { createdAt: "desc" },
    });

    return users;
  } catch (error) {
    return [];
  }
};

export default useUsers;
