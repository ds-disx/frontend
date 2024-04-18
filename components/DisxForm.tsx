'use client'

import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

const URL = process.env.NEXT_PUBLIC_BACKEND

export const DisxForm: React.FC = () => {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter()

  const addDisx = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetch(`http://${process.env.NEXT_PUBLIC_BACKEND}/disxs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: author,
          content: content,
        }),
      });
      router.refresh()
    } catch (error) {
      console.error(error);
    }
  };

  const handleAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  return (
    <div className="pt-6">
      <form onSubmit={addDisx}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={author}
          onChange={handleAuthorChange}
        />
        <label htmlFor="content">Content</label>
        <input
          type="text"
          name="content"
          value={content}
          onChange={handleContentChange}
        />
        <button type="submit">Add disx</button>
      </form>
    </div>
  );
};
