import { getPostById } from "@/lib/usePosts";

type Props = {
  params: {id: number}
}

export async function generateMetadata({ params }: Props) {

  const post = await getPostById(params.id);

  return {
    title: `${post?.title} | Disx`,
    description: `${post?.title} is an user generated post`,
  };
  
}

export default async function page({ params }: Props) {
  const post = await getPostById(params.id);

  return (
    <div>
      {process.env.NEXT_PUBLIC_BACKEND}
      <h1>{post?.title}</h1>
      <p>{post?.content}</p>
    </div>
  );
}
