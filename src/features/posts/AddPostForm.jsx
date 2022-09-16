import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addPost } from '@/features/posts/postsSlice'

export default function AddPostForm() {
    const users = useSelector(({ users }) => users)
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    return (
        <section>
            <h2>Add a New Post</h2>
            <form
                onSubmit={e => {
                    e.preventDefault()

                    if (title && content)
                        dispatch(addPost(title, content, userId))

                    setTitle('')
                    setContent('')
                    setUserId('')
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
                <label htmlFor="postAuthor">Author:</label>
                <select
                    id="postAuthor"
                    value={userId}
                    onChange={e => setUserId(e.target.value)}
                >
                    <option value=""></option>
                    {users.map(user => (
                        <option key={user.id} value={user.id}>
                            {user.name}
                        </option>
                    ))}
                </select>
                <label htmlFor="postContent">Content:</label>
                <textarea
                    name="postContent"
                    id="postContent"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                />
                <button type="submit" disabled={!canSave}>
                    Save Post
                </button>
            </form>
        </section>
    )
}
