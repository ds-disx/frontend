import * as React from "react";

import {
  CardContent,
  CardDark,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getServerSession } from "next-auth";

export async function ProfileCard() {
  const session = await getServerSession();

  return (
    <CardDark>
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
        <CardDescription className="text-base">
          Use description.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center gap-4">
        <CardDescription>Followers</CardDescription>
        <CardDescription>Posts</CardDescription>
        <CardDescription>Likes</CardDescription>
      </CardContent>
    </CardDark>
  );
}
