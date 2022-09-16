import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { addPost } from '@/features/posts/postsSlice'

export default function AddPostForm() {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    return (
        <section>
            <h2>Add a New Post</h2>
            <form
                onSubmit={e => {
                    e.preventDefault()

                    if (title && content)
                        dispatch(addPost({ id: nanoid(), title, content }))

                    setTitle('')
                    setContent('')
                }}
            >
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    name="postTitle"
                    id="postTitle"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <label htmlFor="postContent">Content:</label>
                <textarea
                    name="postContent"
                    id="postContent"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                />
                <button type="submit">Save Post</button>
            </form>
        </section>
    )
}
