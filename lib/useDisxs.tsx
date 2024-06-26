"use server";

const API_URL = `http://${process.env.NEXT_PUBLIC_BACKEND}`;

const formatDateTime = (date: Date): string => {
  return `Created on ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

export const getDisxs = async (): Promise<Disx[] | undefined> => {
  try {
    const res = await fetch(`${API_URL}/api/disxs`, {
      next: { revalidate: 0 },
    });

    const disxs: Disx[] = await res.json();

    disxs.forEach((disx) => {
      const date = new Date(disx.createdAt);
      disx.createdAt = formatDateTime(date) as unknown as Date;
    });

    return disxs;
  } catch (error) {
    console.error(error);
  }
};

export const searchDisxsByTitle = async (title: string): Promise<Disx | undefined> => {
  try {
    const res = await fetch(`${API_URL}/api/disxs/search?title=${title}`, {
      next: { revalidate: 0 },
    });

    return res.json();
  } catch (error) {
    console.error(error);
  }
};

export const getDisxsByUsername = async (username: string): Promise<Disx[] | undefined> => {
  try {
    const res = await fetch(`${API_URL}/api/disxs/user/${username}`, {
      next: { revalidate: 0 },
    });

    const disxs: Disx[] = await res.json();

    disxs.forEach((disx) => {
      const date = new Date(disx.createdAt);
      disx.createdAt = formatDateTime(date) as unknown as Date;
    });

    return disxs;
  } catch (error) {
    console.error(error);
  }
};

export const getDisxById = async (id: number): Promise<Disx | undefined> => {
  try {
    const res = await fetch(`${API_URL}/api/disxs/${id}`, {
      next: { revalidate: 0 },
    });

    const disx: Disx = await res.json();

    const date = new Date(disx.createdAt);
    disx.createdAt = formatDateTime(date) as unknown as Date;

    return disx;
  } catch (error) {
    console.error(error);
  }
};

export const postDisx = async (disx: DisxPost, token: string) => {
  try {
    const res = await fetch(`${API_URL}/api/disxs`, {
      method: "POST",
      body: JSON.stringify(disx),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export const deleteDisx = async (disxId: number, token: string) => {
  try {
    const res = await fetch(`${API_URL}/api/disxs/${disxId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    
  } catch (error) {
    console.error(error);
  }
};

