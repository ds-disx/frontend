"use server";

const API_URL = `http://${process.env.NEXT_PUBLIC_BACKEND}`;

const formatDateTime = (date: Date): string => {
  return `Created on ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

export const getCommentsById = async (disxId: number): Promise<UComment[] | undefined> => {
  try {
    const res = await fetch(`${API_URL}/api/comments/disx/${disxId}`, {
      next: { revalidate: 0 },
    });

    const comments: UComment[] = await res.json();

    comments.forEach((comment) => {
      const date = new Date(comment.createdAt);
      comment.createdAt = formatDateTime(date) as unknown as Date;
    });

    return comments;
  } catch (error) {
    console.error(error);
  }
};

export const postComment = async (comment: object, token: string): Promise<string | undefined> => {
  try {
    const res = await fetch(`${API_URL}/api/comments`, {
      method: "POST",
      body: JSON.stringify(comment),
      headers: {
        "Content-Type": "application/json",
        // "Authorization": `Bearer ${token}`,
      },
    });

    return res.text();
  } catch (error) {
    console.error(error);
  }
};
