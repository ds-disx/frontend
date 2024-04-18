import * as React from "react";

import {
  CardDark,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getServerSession } from "next-auth";
import { ModeToggler } from "@/components/ModeToggler";

export async function ProfileCard() {
  const session = await getServerSession();

  return (
    <CardDark className="relative">
      <div className="absolute top-2 left-2">
        <ModeToggler />
      </div>
      <CardHeader>
        <Avatar className="mx-auto h-16 w-16">
          <AvatarImage src="https://avatars.githubusercontent.com/u/4414321?v=4" />
          <AvatarFallback>P</AvatarFallback>
        </Avatar>
        <CardTitle className="pt-6">
          {session ? session?.user?.name : "Name"}
        </CardTitle>
        <CardDescription>
          {session ? session?.user?.email : "@email"}
        </CardDescription>
      </CardHeader>
    </CardDark>
  );
}
