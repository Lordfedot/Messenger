import ConversationList from "@/components/conversations/conversation-list";
import Sidebar from "@/components/sidebar/sidebar";
import useConversations from "@/hooks/useConversations";

const ConversationsLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const conversations = await useConversations();
  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList initialItems={conversations} />
        {children}
      </div>
    </Sidebar>
  );
};

export default ConversationsLayout;
