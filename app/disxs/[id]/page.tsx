import { getDisxById } from "@/lib/useDisxs";
import { get } from "http";

type Props = {
  params: {id: number}
} 

export async function generateMetadata({ params }: Props) {

  const disx = await getDisxById(params.id);

  return {
    title: `${disx?.title} | Disx`,
    description: `${disx?.title} is an user generated disx`,
  };
  
}

export default async function page({ params }: Props) {
  const disx = await getDisxById(params.id);

  return (
    <div>
      {process.env.NEXT_PUBLIC_BACKEND}
      <h1>{disx?.title}</h1>
      <p>{disx?.content}</p>
    </div>
  );
}
