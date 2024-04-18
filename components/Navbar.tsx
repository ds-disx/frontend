"use client"

import { ModeToggler } from "@/components/ModeToggler"
import Link from "next/link"
import React from "react"

export default function Navbar() {
  return (
    <div>
      <ul className="fixed bottom-0 left-0 flex h-16 w-screen justify-evenly border-t bg-white dark:bg-slate-950 md:hidden">
        <Link href={"/"} className="link-hover flex w-full items-center justify-center">
          Home
        </Link>
        <Link href={"/"} className="link-hover flex w-full items-center justify-center">
          Search
        </Link>
        <Link href={"/"} className="link-hover flex w-full items-center justify-center">
          Posts
        </Link>
      </ul>
      <ul className="fixed top-0 hidden left-0 h-16 w-full dark:bg-slate-950 shadow z-10 dark:shadow-gray-950 justify-evenly md:flex ">
        <Link href={"/"} className="link-hover flex w-full items-center justify-center">
          Home
        </Link>
        <Link href={"/"} className="link-hover flex w-full items-center justify-center">
          Search
        </Link>
        <Link href={"/"} className="link-hover flex w-full items-center justify-center">
          Posts
        </Link>
      </ul>
    </div>
  )
}
