import client from "@/lib/prismadb";

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
    return null;
  }
};

export default getMessages;
