import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import NextAuth from "next-auth/next";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

// https://www.reddit.com/r/nextjs/comments/13eb1vj/how_to_get_nextauth_server_session_in_nextjs
