import { PostCard } from "@/components/PostCard";
import { PostForm } from "@/components/PostForm";
import { getPosts } from "@/lib/usePosts";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main>
      <ul className="flex flex-col gap-4">
        {posts?.map((post) => <PostCard key={post.id} post={post} />)}
      </ul>
      
      <PostForm />
    </main>
  );
}
