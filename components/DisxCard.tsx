import {
  CardContent,
  CardDark,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Disx } from "@/types";
import React from "react";
import Link from "next/link";

export const DisxCard = ({ disx }: { disx: Disx }) => {
  return (
    <Link href={`/disxs/${disx.id}`}>
      <CardDark className="text-left dark:hover:bg-slate-700 hover:bg-gray-200 hover:cursor-pointer">
        <CardHeader>
          <CardTitle className="text-wrap">{disx.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="line-clamp-4">{disx.content}</CardDescription>
        </CardContent>
      </CardDark>
    </Link>
  );
};
