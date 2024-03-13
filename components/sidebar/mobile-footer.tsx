"use client";

import UseConversation from "@/hooks/useConversation";
import useRoutes from "@/hooks/useRoutes";
import MobileItem from "./mobile-item";

const MobileFooter = () => {
  const routes = useRoutes();
  const { isOpen } = UseConversation();

  if (isOpen) {
    return null;
  }
  return (
    <div className="fixed justify-between w-full bottom-0 z-40 flex items-center bg-white border-t-[1px] lg:hidden">
      {routes.map(({ label, href, icon, active, onClick }) => (
        <MobileItem
          href={href}
          icon={icon}
          key={label}
          active={active}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

export default MobileFooter;
