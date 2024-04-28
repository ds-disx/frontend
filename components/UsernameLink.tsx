"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
  username: string | undefined;
  classname?: string;
};

export const UsernameLink = ({ children, username, classname }: Props) => {
  const router = useRouter();

  const handleUserLinkClick = (event: React.MouseEvent) => {
    event.preventDefault();
    router.push(`/user/${username}`);
  };
  return <button className={cn(classname)} onClick={handleUserLinkClick}>{children}</button>;
};
