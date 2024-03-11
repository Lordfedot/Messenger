"use client";

import { BsArrow90DegLeft } from "react-icons/bs";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  const onClick = () => {
    router.push("/");
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
