import { HiUsers, HiChat, HiArrowCircleLeft } from "react-icons/hi";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { useMemo } from "react";

import UseConversation from "./useConversation";

const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = UseConversation();

  const routes = useMemo(
    () => [
      {
        label: "Chat",
        href: "/conversations",
        icon: HiChat,
        active: pathname === "/conversations" || !!conversationId,
      },
      {
        label: "Users",
        href: "/users",
        icon: HiUsers,
        active: pathname === "/users",
      },
      {
        label: "Logout",
        href: "#",
        icon: HiArrowCircleLeft,
        onClick: () => signOut(),
      },
    ],
    [conversationId, pathname]
  );

  return routes;
};

export default useRoutes;
