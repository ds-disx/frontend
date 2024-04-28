import { DisxCard } from "@/components/DisxCard";
import { getDisxsByUsername } from "@/lib/useDisxs";
import Link from "next/link";

type Props = {
  params: { username: string };
};

export default async function page({ params: { username } }: Props) {
  const disxs = await getDisxsByUsername(username);

  return (
    <main>
      <h1 className="text-xl">User {username}</h1>
      <ul className="flex flex-col gap-4">
        {disxs?.map((disx) => (
          <li key={disx.id}>
            <Link href={`/disxs/${disx.id}`}>
              <DisxCard key={disx.id} disx={disx} />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
