type Post = {
  id: number;
  title: string;
  content: string;
};

export const getPosts = async (): Promise<Post[] | undefined> => {
  try {
    const res = await fetch(`http://${process.env.NEXT_PUBLIC_BACKEND}/posts`, {
      cache: "no-cache",
    });
    return res.json();
  } catch (error) {
    console.error(error);
  }
};
