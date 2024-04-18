import { Post } from "@/types";

export const getPosts = async (): Promise<Post[] | undefined> => {
  try {
    const res = await fetch(`http://${process.env.NEXT_PUBLIC_BACKEND}/posts`, {
      next: { revalidate: 0 },
    });

    return res.json();
  } catch (error) {
    console.error(error);
  }
};

export const searchPostsByTitle = async (title: string): Promise<Post | undefined> => {
  try {
    const res = await fetch(
      `http://${process.env.NEXT_PUBLIC_BACKEND}/posts/search?title=${title}`,
      {
        next: { revalidate: 60 },
      },
    );

    return res.json();
  } catch (error) {
    console.error(error);
  }
};

export const getPostById = async (id: number): Promise<Post | undefined> => {
  try {
    const res = await fetch(`http://${process.env.NEXT_PUBLIC_BACKEND}/posts/${id}`, {
      next: { revalidate: 60 },
    });

    return res.json();
  } catch (error) {
    console.error(error);
  }
};
