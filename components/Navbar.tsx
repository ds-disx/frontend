"use client";

import Link from "next/link";
import React from "react";
import { DisxFormModal } from "@/components/DisxFormModal";
import { useSession } from "next-auth/react";
import { LoginModal } from "@/components/LoginModal";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <div>
      <ul className="fixed bottom-0 left-0 flex h-16 w-screen justify-evenly border-t bg-white dark:bg-slate-950 md:hidden">
        <Link href={"/"} className="link-hover flex w-full items-center justify-center">
          Home
        </Link>
        <Link href={"/"} className="link-hover flex w-full items-center justify-center">
          Search
        </Link>
        <li className="link-hover flex w-full items-center justify-center">
          {session ? <DisxFormModal /> : <LoginModal text="Create Disx" />}
        </li>
        <li className="link-hover flex w-full items-center justify-center">Login</li>
      </ul>
      <ul className="fixed top-0 hidden left-0 h-16 w-full bg-slate-50 dark:bg-slate-950 shadow z-10 dark:shadow-gray-950 justify-evenly md:flex ">
        <Link href={"/"} className="link-hover flex w-full items-center justify-center">
          Home
        </Link>
        <Link href={"/"} className="link-hover flex w-full items-center justify-center">
          Search
        </Link>
        <li className="link-hover flex w-full items-center justify-center">
          {session ? <DisxFormModal /> : <LoginModal text="Create Disx" />}
        </li>
      </ul>
    </div>
  );
}
