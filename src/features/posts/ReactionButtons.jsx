import { shape, string, number } from 'prop-types'
import { useDispatch } from 'react-redux'

import { addReaction } from './postsSlice'

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕',
}

ReactionButtons.propTypes = {
    post: shape({
        id: string,
        title: string,
        content: string,
        date: string,
        reactions: shape({
            thumbsUp: number,
            wow: number,
            heart: number,
            rocket: number,
            coffee: number,
        }),
    }),
}

export default function ReactionButtons({ post }) {
    const dispatch = useDispatch()

    const reactionButtons = Object.entries(reactionEmoji).map(
        ([reactionName, emoji]) => (
            <button
                key={reactionName}
                type="button"
                className="reactionButton"
                onClick={() =>
                    dispatch(addReaction({ postId: post.id, reactionName }))
                }
            >
                {emoji} {post.reactions[reactionName]}
            </button>
        ),
    )

    return <div>{reactionButtons}</div>
}
