import { useSelector } from 'react-redux'

import AddPostForm from './AddPostForm'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'

export default function PostsList() {
    const posts = useSelector(({ posts }) => posts)
    const orderedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date))

    return (
        <section>
            <AddPostForm />
            {orderedPosts.map(post => {
                const { userId } = post

                return (
                    <article key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content.substring(0, 100)}</p>
                        <p className="postCredit">
                            <PostAuthor {...{ userId }} />
                            <TimeAgo timestamp={post.date} />
                        </p>
                        <ReactionButtons {...{ post }} />
                    </article>
                )
            })}
        </section>
    )
}
