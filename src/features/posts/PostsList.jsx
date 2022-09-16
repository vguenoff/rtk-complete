import { useSelector } from 'react-redux'

import AddPostForm from './AddPostForm'

export default function PostsList() {
    const posts = useSelector(({ posts }) => posts)

    return (
        <section>
            <AddPostForm />
            {posts.map(post => (
                <article key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.content.substring(0, 100)}</p>
                </article>
            ))}
        </section>
    )
}
