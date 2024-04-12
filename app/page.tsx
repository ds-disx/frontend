import { PostForm } from "@/components/PostForm";
import { getPosts } from "@/lib/usePosts";


export default async function Home() {
  const posts = await getPosts();

  return (
    <main>
      {process.env.BACKEND}
      {posts?.map((post) => (
        <div
          key={post.id}
          className="my-4 whitespace-nowrap rounded-lg border bg-card bg-slate-50 first:my-0 dark:bg-slate-800/80">
          <div className="px-4 py-2">
            <h1 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              {post.title}
            </h1>
            <p className="overflow-hidden text-ellipsis text-base text-gray-600 dark:text-slate-200">
              {post.content}
            </p>
          </div>
        </div>
      ))}
      <PostForm/>
    </main>
  );
}
