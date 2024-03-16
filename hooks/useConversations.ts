import client from "@/lib/prismadb";
import useCurrentUser from "./useCurrentUser";

const useConversations = async () => {
  const currentUser = await useCurrentUser();

  if (!currentUser?.email) {
    return [];
  }

  try {
    const conversations = await client.conversation.findMany({
      orderBy: {
        lastMessageAt: "desc",
      },
      where: {
        userIds: {
          has: currentUser.id,
        },
      },
      include: {
        users: true,
        messages: {
          include: {
            sender: true,
            seen: true,
          },
        },
      },
    });

    return conversations
  } catch (error) {
    return [];
  }
};

export default useConversations;
