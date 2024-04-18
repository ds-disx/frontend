import {
  CardDark,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Post } from "@/types";
import React from "react";
import Link from "next/link";

export const PostCard = ({ post }: { post: Post }) => {
  return (
    <Link href={`/posts/${post.id}`}>
      <CardDark className="text-left whitespace-nowrap dark:hover:bg-slate-700 hover:bg-gray-200 hover:cursor-pointer">
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
          <CardDescription className="text-ellipsis overflow-hidden">
            {post.content}
          </CardDescription>
        </CardHeader>
      </CardDark>
    </Link>
  );
};
