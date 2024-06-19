import { CommentCard } from "@/components/CommentCard";
import { CommentFormModal } from "@/components/CommentFormModal";
import { DisxCard, DisxCardLight } from "@/components/DisxCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getCommentsById } from "@/lib/useComments";
import { getDisxById } from "@/lib/useDisxs";
import { PlusIcon } from "lucide-react";

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

export default async function Home({ params }: Props) {
  const disx = await getDisxById(params.id);
  const comments = await getCommentsById(params.id);

  return (
    <main className="max-h-[89vh] overflow-y-scroll pr-2">
      <DisxCardLight disx={disx} />
      <div className="mt-2 flex justify-end">
        <CommentFormModal disxId={params.id} />
      </div>
      <Separator className="mt-4" />
      <ul className="mt-2 flex flex-col gap-2 ">
        {comments ? (
          comments?.map((comment) => (
            <li key={comment.id}>
              <CommentCard comment={comment} />
            </li>
          ))
        ) : (
          <p>No comments found</p>
        )}
      </ul>
    </main>
  );
}
