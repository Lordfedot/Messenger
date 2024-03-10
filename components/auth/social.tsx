"use client";

import { BsGithub, BsGoogle } from "react-icons/bs";

import { Button } from "@/components/ui/button";

export const Social = () => {
  return (
    <div className="w-full flex items-center gap-x-2 mt-4">
      <Button variant="outline" size="lg" className="w-full" onClick={() => {}}>
        <BsGoogle className="h-5 w-5" />
      </Button>
      <Button variant="outline" size="lg" className="w-full" onClick={() => {}}>
        <BsGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};
