import { DisxCard } from "@/components/DisxCard";
import { getDisxs } from "@/lib/useDisxs";

export default async function Home() {
  const disxs = await getDisxs();

  return (
    <main>
      <ul className="flex flex-col gap-4">
        {disxs?.map((disx) => <DisxCard key={disx.id} disx={disx} />)}
      </ul>
    </main>
  );
}
