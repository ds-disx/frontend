import {
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
      <CardDark className="text-left whitespace-nowrap dark:hover:bg-slate-700 hover:bg-gray-200 hover:cursor-pointer">
        <CardHeader>
          <CardTitle>{disx.title}</CardTitle>
          <CardDescription className="text-ellipsis overflow-hidden">
            {disx.content}
          </CardDescription>
        </CardHeader>
      </CardDark>
    </Link>
  );
};
