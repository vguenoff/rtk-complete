import { Link } from 'react-router-dom'

export default function App() {
    return (
        <ul>
            <li>
                <Link to="/counter">Counter</Link>
            </li>
            <li>
                <Link to="/bulletinBoard">Bulletin Board</Link>
            </li>
        </ul>
    )
}
