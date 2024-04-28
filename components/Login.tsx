"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { LogIn, LogOut } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

export const Login = () => {
  const { data: session } = useSession();

  const buttonProps: ButtonProps = {
    className: "bg-inherit dark:border-gray-700",
    variant: "outline",
    size: "icon",
  };

  if (session) {
    return (
      <Button {...buttonProps} onClick={() => signOut()}>
        <LogOut className="h-[1.2rem] w-[1.2rem] text-red-500 scale-100 transition-all" />
      </Button>
    );
  }

  return (
    <Button {...buttonProps} onClick={() => signIn("keycloak")}>
      <LogIn className="h-[1.2rem] w-[1.2rem] dark:text-white text-gray-600 scale-100 transition-all" />
    </Button>
  );
};
