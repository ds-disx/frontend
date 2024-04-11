import { Card } from "@/components/ui/card"
import { getPosts } from "@/lib/usePosts"
import { revalidatePath } from "next/cache"
import { title } from "process"

// const getComments = async () => {
//   const response = await fetch("http://localhost:8080/comments")
//   return response.json()
// }

export default async function Home() {
  const posts = await getPosts()
  // const comments = await getComments()

  const addPost = async (formData: FormData) => {
    "use server"

    const response = await fetch("http://localhost:3010/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: formData.get("title"),
        content: formData.get("content"),
      }),
    })

    revalidatePath("/")
  }

  return (
    <main>
      {posts?.map((post) => (
        <div
          key={post.id}
          className="my-4 whitespace-nowrap rounded-lg border bg-card bg-slate-50 first:my-0 dark:bg-slate-800/80"
        >
          <div className="px-4 py-2">
            <h1 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{post.title}</h1>
            <p className="overflow-hidden text-ellipsis text-base text-gray-600 dark:text-slate-200">{post.content}</p>
          </div>
        </div>
      ))}
      {/* {comments.map((comment: any) => (
        <div key={comment.id}>
          <p>{comment.id}</p>
          <p>{comment.author}</p>
          <p>{comment.content}</p>
        </div>
      ))} */}
      <form action={addPost}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" />
        <label htmlFor="content">Content</label>
        <input type="text" name="content" />
        <button type="submit">Add Post</button>
      </form>
    </main>
  )
}
