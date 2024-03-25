import ConversationList from "@/components/conversations/conversation-list";
import Sidebar from "@/components/sidebar/sidebar";
import getConversations from "@/actions/getConversations";
import useUsers from "@/actions/getUsers";

const ConversationsLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const conversations = await getConversations();
  const users = await useUsers()

  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList users={users} initialItems={conversations} />
        {children}
      </div>
    </Sidebar>
  );
};

export default ConversationsLayout;
