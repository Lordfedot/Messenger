import client from "@/lib/prismadb";
import { FullMessageType } from "@/types";

const getMessages = (conversationId: string) => {
  try {
    const messages = client.message.findMany({
      where: {
        conversationId,
      },
      include: {
        sender: true,
        seen: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });
    return messages;
  } catch (error) {
    return [];
  }
};

export default getMessages;
