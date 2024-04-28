import { CardDark, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getServerSession } from "next-auth";
import { ModeToggler } from "@/components/ModeToggler";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Login } from "@/components/Login";
import Link from "next/link";

export async function ProfileCard() {
  const session = await getServerSession(authOptions);

  return (
    <CardDark className="relative">
      <div className="absolute top-2 left-2">
        <ModeToggler />
      </div>
      <div className="absolute top-2 right-2">
        <Login />
      </div>
      <CardHeader>
        <Avatar className="mx-auto h-16 w-16 hover:brightness-90 dark:hover:brightness-75">
          <Link href={`/user/${session?.user.name}`}>
            <AvatarImage src="https://avatars.githubusercontent.com/u/4414321?v=4" />
            <AvatarFallback>P</AvatarFallback>
          </Link>
        </Avatar>
        <CardTitle className="pt-6 ">
          <Link
            href={`/user/${session?.user.name}`}
            className="dark:hover:text-teal-700 hover:text-teal-700 hover:cursor-pointer"
          >
            {session ? session.user.name : "Name"}
          </Link>
        </CardTitle>
        <CardDescription>{session ? session.user.email : "@email"}</CardDescription>
      </CardHeader>
    </CardDark>
  );
}
