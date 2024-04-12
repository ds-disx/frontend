"use server";

import { revalidatePath } from "next/cache";

type Post = {
  id: number;
  title: string;
  content: string;
};

export const getPosts = async (): Promise<Post[] | undefined> => {
  try {
    const res = await fetch(`http://${process.env.BACKEND}:8080/posts`, {
      cache: "no-cache",
    });
    return res.json();
  } catch (error) {
    console.error(error);
  }
};

export const addPost = async (formData: FormData) => {
  try {
    await fetch(`http://${process.env.BACKEND}:8080/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: formData.get("title"),
        content: formData.get("content"),
      }),
    });
    revalidatePath("/");
  } catch (error) {
    console.error(error);
  }
};
