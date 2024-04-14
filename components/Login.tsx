"use client";

import { CardDark } from "@/components/ui/card";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

export const Login = () => {
  const { data: session, status } = useSession();

  return (
    <CardDark>
      {!session ? (
        <button onClick={() => signIn()}>Login</button>
      ) : (
        <button onClick={() => signOut()}>Logout</button>
      )}
    </CardDark>
  );
};
