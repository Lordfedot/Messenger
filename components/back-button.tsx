"use client";

import { BsArrow90DegLeft } from "react-icons/bs";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

interface BackButtonProps {
  href?: string;
}

const BackButton = ({ href = "/" }: BackButtonProps) => {
  const router = useRouter();
  const onClick = () => {
    router.push(href);
  };
  return (
    <Button
      className="absolute top-10 left-10"
      variant="outline"
      onClick={onClick}
    >
      <BsArrow90DegLeft />
    </Button>
  );
};

export default BackButton;
