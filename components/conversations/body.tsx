"use client";
import { useEffect, useRef, useState } from "react";

import useConversation from "@/hooks/useConversation";
import { FullMessageType } from "@/types";
import MessageBox from "./message-box";
import axios from "axios";

interface BodyProps {
  initialMessages: FullMessageType[];
}

const Body = ({ initialMessages }: BodyProps) => {
  const [messages, setMessages] = useState(initialMessages);
  const bottomRef = useRef<HTMLDivElement>(null);

  const { conversationId } = useConversation();

  useEffect(() => {
    axios.post(`/api/conversations/${conversationId}/seen`);
  }, [conversationId]);
  
  return (
    <div className="flex-1 overflow-y-hidden">
      {messages.map((message, index) => (
        <MessageBox
          isLast={index === messages.length - 1}
          key={message.id}
          data={message}
        />
      ))}
      <div ref={bottomRef} className="pt-24" />
    </div>
  );
};

export default Body;
