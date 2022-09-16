import { number } from 'prop-types'
import { useSelector } from 'react-redux'

PostAuthor.propTypes = {
    userId: number,
}

export default function PostAuthor({ userId }) {
    const users = useSelector(({ users }) => users)
    const author = users.find(user => user.id === userId)

    return <span>by {author ? author.name : 'Unknown author'}</span>
}
