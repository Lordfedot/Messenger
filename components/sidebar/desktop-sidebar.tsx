"use client";
import { useState } from "react";

import { User } from "@prisma/client";
import useRoutes from "@/hooks/useRoutes";

import DesktopItem from "./desktop-item";
import Avatar from "../avatar";

interface DesktopSidebarProps {
  currentUser: User;
}

const DesktopSidebar = ({ currentUser }: DesktopSidebarProps) => {
  const routes = useRoutes();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:w-20 xl:px-6 lg:overflow-y-auto   lg:bg-white lg:border-r-[1px]  lg:pb-4  lg:flex lg:flex-col justify-between">
      <nav className="mt-4 flex flex-col justify-between">
        <ul role="list" className="flex flex-col items-center space-y-1">
          {routes.map(({ href, icon, label, active, onClick }) => (
            <DesktopItem
              key={label}
              href={href}
              label={label}
              active={active}
              onClick={onClick}
              icon={icon}
            />
          ))}
        </ul>
      </nav>
      <nav className="mt-4 flex flex-col justify-center items-center">
        <div
          className="cursor-pointer hover:opacity-75 transition"
          onClick={() => setIsOpen(true)}
        >
          <Avatar user={currentUser} />
        </div>
      </nav>
    </div>
  );
};

export default DesktopSidebar;
