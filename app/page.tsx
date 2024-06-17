import { DisxCard } from "@/components/DisxCard";
import { getDisxs } from "@/lib/useDisxs";
import Link from "next/link";

export default async function Home() {
  const disxs = await getDisxs();

  return (
    <main>
      <ul className="max-h-[89vh] overflow-y-scroll flex flex-col gap-4 pr-2">
        {disxs?.map((disx) => (
          <li key={disx.id}>
            <Link href={`/disxs/${disx.id}`}>
              <DisxCard disx={disx} />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
