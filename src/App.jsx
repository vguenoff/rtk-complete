import { Link } from 'react-router-dom'

import './App.css'
import Counter from './Counter'

export default function App() {
    return (
        <div className="App">
            <nav>
                <ul>
                    <li>
                        <Link to="/counter">Counter</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
