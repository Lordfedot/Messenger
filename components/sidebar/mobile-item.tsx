"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { IconType } from "react-icons/lib";

interface MobileItemProps {
  href: string;
  active?: boolean;
  icon: IconType;
  onClick?: () => void;
}

const MobileItem = ({ href, icon: Icon, active, onClick }: MobileItemProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Link
      className={cn(
        "group flex gap-x-3 text-sm leading-6 font-semibold w-full justify-center p-4 text-gray-500 hover:text-black hover:bg-gray-100",
        active && "bg-gray-100 text-black"
      )}
      onClick={onClick}
      href={href}
    >
      <Icon className="h-6 w-6"/>
    </Link>
  );
};

export default MobileItem;
