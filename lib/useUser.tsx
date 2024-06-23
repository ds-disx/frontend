"use server";


const API_URL = `http://${process.env.NEXT_PUBLIC_BACKEND}`;

export const checkAdmin = async (token: string | undefined) => {
    const res = await fetch(`${API_URL}/api/users/isAdmin`, {
      next: { revalidate: 0 },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status === 401) {
        return false
    }

    if (res.status === 200) {
        return true
    }
};