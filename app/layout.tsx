import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ProfileCard } from "@/components/ProfileCard";
import Navbar from "@/components/Navbar";
import { getServerSession } from "next-auth";
import SessionProvider from "@/components/SesssionProvider";
import { Login } from "@/components/Login";

export const metadata: Metadata = {
  title: "Disx - Discuss music with others",
  description:
    "Disx invites music enthusiasts to engage in vibrant discussions \
                about their favorite tunes and artists. Explore the world of music \
                with like-minded individuals, sharing insights, discoveries, and \
                opinions in an inclusive community space. Dive into the rhythm of \
                conversation with Disx - where every note sparks dialogue and \
                every beat resonates with passion.",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const session = await getServerSession();

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SessionProvider session={session}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="mx-auto max-w-xs md:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl">
              <Navbar />
              <div className="grid-cols-3 gap-16 pt-4 md:grid pb-20 md:pb-0 bg">
                {/* Left side */}
                <div className="hidden flex-col md:flex md:pt-[4.5rem] gap-4">
                  {/* Profile card */}
                  <Login />
                  <ProfileCard />
                </div>

                {/* Content side */}
                <div className="col-span-2 md:pb-4 md:pt-[4.5rem]">{children}</div>
              </div>
            </div>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
