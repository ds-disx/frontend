import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { DeleteDisx } from "@/components/DeleteDisx";
import { getDisxs } from "@/lib/useDisxs";
import { checkAdmin } from "@/lib/useUser";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function Admin() {
  const session = await getServerSession(authOptions);
  const disxs = await getDisxs();
  const isAdmin = (await checkAdmin(session?.token.accessToken)) ? null : redirect("/");

  isAdmin;

  return (
    <main>
      <section>
        <ul>
          {disxs?.map((disx) => (
            <li key={disx.id}>
              {disx.id} - <b>{disx.username}</b> - {disx.title}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <DeleteDisx />
      </section>
    </main>
  );
}
