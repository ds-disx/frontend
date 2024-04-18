import { Disx } from "@/types";

export const getDisxs = async (): Promise<Disx[] | undefined> => {
  try {
    const res = await fetch(`http://${process.env.NEXT_PUBLIC_BACKEND}/disxs`, {
      next: { revalidate: 0 },
    });

    return res.json();
  } catch (error) {
    console.error(error);
  }
};

export const searchDisxsByTitle = async (title: string): Promise<Disx | undefined> => {
  try {
    const res = await fetch(
      `http://${process.env.NEXT_PUBLIC_BACKEND}/disxs/search?title=${title}`,
      {
        next: { revalidate: 60 },
      },
    );

    return res.json();
  } catch (error) {
    console.error(error);
  }
};

export const getDisxById = async (id: number): Promise<Disx | undefined> => {
  try {
    const res = await fetch(`http://${process.env.NEXT_PUBLIC_BACKEND}/disxs/${id}`, {
      next: { revalidate: 60 },
    });

    return res.json();
  } catch (error) {
    console.error(error);
  }
};
