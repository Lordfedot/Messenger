"use client";

import { cn } from "@/lib/utils";

import useConversation from "@/hooks/useConversation";
import EmptyState from "@/components/empty-state";

const ConversationsPage = () => {
  const { isOpen } = useConversation();
  return (
    <div
      className={cn("lg:pl-80 h-full lg:block", isOpen ? "block" : "hidden")}
    >
      <EmptyState />
    </div>
  );
};

export default ConversationsPage;
