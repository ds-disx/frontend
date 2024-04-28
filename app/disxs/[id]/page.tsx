import { DisxCard, DisxCardLight } from "@/components/DisxCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getDisxById } from "@/lib/useDisxs";

type Props = {
  params: { id: number };
};

export async function generateMetadata({ params: { id } }: Props) {
  const disx = await getDisxById(id);

  return {
    title: `${disx?.title} | Disx`,
    description: `${disx?.title} is an user generated disx`,
  };
}

export default async function page({ params }: Props) {
  const disx = await getDisxById(params.id);

  return (
    <main>
      <DisxCardLight disx={disx} />
      {/* <Card>
        <CardHeader>
          <CardTitle>{disx?.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{disx?.content}</CardDescription>
        </CardContent>
      </Card> */}
    </main>
  );
}
