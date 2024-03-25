"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

import useOtherUser from "@/hooks/useOtherUser";
import { FullConversationType } from "@/types";
import Avatar from "../avatar";
import AvatarGroup from "../group-avatar";

interface ConversationsBoxProps {
  data: FullConversationType;
  selected?: boolean;
}

const ConversationsBox = ({ data, selected }: ConversationsBoxProps) => {
  const otherUser = useOtherUser(data);
  const session = useSession();
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push(`/conversations/${data.id}`);
  }, [data.id, router]);

  const lastMessage = useMemo(() => {
    const messages = data.messages || [];

    return messages[messages.length - 1];
  }, [data.messages]);

  const userEmail = useMemo(() => {
    return session.data?.user?.email;
  }, [session.data?.user?.email]);

  const hasSeen = useMemo(() => {
    if (!lastMessage) {
      return false;
    }

    const seenArray = lastMessage.seen || [];

    if (!userEmail) {
      return false;
    }

    return seenArray.filter((user) => user.email === userEmail).length !== 0;
  }, [lastMessage, userEmail]);

  const lastMessageText = useMemo(() => {
    if (lastMessage?.image) {
      return "Image";
    }
    if (lastMessage?.body) {
      return lastMessage.body;
    }

    return "Started a new conversation";
  }, [lastMessage?.body, lastMessage?.image]);
  return (
    <div
      className={cn(
        "w-full relative space-x-3 flex items-center hover:bg-neutral-100 rounded-lg transition cursor-pointer p-3",
        selected ? "bg-neutral-100" : "bg-white"
      )}
      onClick={handleClick}
    >
      {data.isGroup ? <AvatarGroup users={data.users}/> : <Avatar user={otherUser} />}

      <div className="min-w-0 flex-1">
        <div className="focus:outline-none">
          <div className="flex justify-between items-center mb-1">
            <p className="text-md font-medium text-gray-900">
              {data.name || otherUser.name}
            </p>
            {lastMessage?.createdAt && (
              <p className="text-xs text-gray-400 font-light">
                {format(new Date(lastMessage.createdAt), "p")}
              </p>
            )}
          </div>
          <p
            className={cn(
              "text-sm truncate",
              hasSeen ? "text-gray-500" : "text-black font-medium"
            )}
          >
            {lastMessageText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConversationsBox;
