"use client";

import { CardDark } from "@/components/ui/card";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

export const Login = () => {
  const { data: session } = useSession();

  return (
    <>
      {!session ? (
        <button onClick={() => signIn()}>
          <CardDark>Login</CardDark>
        </button>
      ) : (
        <button onClick={() => signOut()}>
          <CardDark>Logout</CardDark>
        </button>
      )}
    </>
  );
};
