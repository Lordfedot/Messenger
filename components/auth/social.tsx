"use client";

import { BsGithub, BsGoogle } from "react-icons/bs";
import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const Social = () => {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };
  return (
    <div className="w-full flex items-center gap-x-2 mt-4">
      <Button
        onClick={() => onClick("google")}
        variant="outline"
        size="lg"
        className="w-full"
      >
        <BsGoogle className="h-5 w-5" />
      </Button>
      <Button
        onClick={() => onClick("github")}
        variant="outline"
        size="lg"
        className="w-full"
      >
        <BsGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};
