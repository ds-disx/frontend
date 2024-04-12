"use client"

import { addPost } from '@/lib/usePosts';
import { revalidatePath } from 'next/cache';
import React from 'react'

export const PostForm = () => {

  return (
    <div>
      Postform
      <form action={addPost}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" />
        <label htmlFor="content">Content</label>
        <input type="text" name="content" />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}
