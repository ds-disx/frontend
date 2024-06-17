import { UsernameLink } from "@/components/UsernameLink";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDark,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { ChatBubbleIcon } from "@radix-ui/react-icons";

export const DisxCard = ({ disx }: { disx: Disx | undefined }) => {
  return (
    <CardDark className="text-left dark:hover:bg-slate-700 hover:bg-gray-200 hover:cursor-pointer">
      <CardHeader>
        <div className="-mt-2 flex justify-between pb-2">
          <CardDescription className=" font-semibold hover:underline hover:text-teal-700 group">
            {/* Used because cant nests link*/}
            <UsernameLink classname="flex gap-2" username={disx?.username}>
              <Avatar className="w-5 h-5 group-hover:brightness-75">
                <AvatarImage src="https://avatars.githubusercontent.com/u/4414321?v=4" />
              </Avatar>
              u/{disx?.username}
            </UsernameLink>
          </CardDescription>
          <CardDescription>{disx?.createdAt as unknown as string}</CardDescription>
        </div>
        <CardTitle className="font-semibold text-xl">{disx?.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="line-clamp-4">{disx?.content}</CardDescription>
        <CardDescription className="-mb-3 flex gap-1 items-center font-semibold mt-2">
          <ChatBubbleIcon />
          {disx?.commentCount}
        </CardDescription>
      </CardContent>
    </CardDark>
  );
};

export const DisxCardLight = ({ disx }: { disx: Disx | undefined }) => {
  return (
    <Card className="text-left">
      <CardHeader>
        <div className="-mt-2 flex justify-between pb-2">
          <CardDescription className=" font-semibold hover:underline hover:text-teal-700 group">
            {/* Used because cant nests link*/}
            <UsernameLink classname="flex gap-2" username={disx?.username}>
              <Avatar className="w-5 h-5 group-hover:brightness-75">
                <AvatarImage src="https://avatars.githubusercontent.com/u/4414321?v=4" />
              </Avatar>
              u/{disx?.username}
            </UsernameLink>
          </CardDescription>
          <CardDescription>{disx?.createdAt as unknown as string}</CardDescription>
        </div>
        <CardTitle className="font-semibold text-xl">{disx?.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="">{disx?.content}</CardDescription>
      </CardContent>
    </Card>
  );
};
