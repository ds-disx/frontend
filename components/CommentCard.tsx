"use client"

import { UsernameLink } from "@/components/UsernameLink";
import {
  Card,
  CardContent,
  CardDark,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";

export const CommentCard = ({ comment }: { comment: UComment | undefined }) => {
  return (
    <CardDark className="text-left">
      <CardHeader>
        <div className="-mt-2 flex justify-between pb-2">
          <CardDescription className=" font-semibold hover:underline hover:text-teal-700 group">
            {/* Used because cant nests link*/}
            <UsernameLink classname="flex gap-2" username={comment?.username}>
              <Avatar className="w-5 h-5 group-hover:brightness-75 ">
                <AvatarImage className="rounded-full" src="https://avatars.githubusercontent.com/u/4414321?v=4" />
              </Avatar>
              u/{comment?.username}
            </UsernameLink>
          </CardDescription>
          <CardDescription>{comment?.createdAt as unknown as string}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{comment?.content}</CardDescription>
      </CardContent>
    </CardDark>
  );
};
