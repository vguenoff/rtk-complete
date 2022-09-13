import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '@/features/counterSlice'

export default function Counter() {
    const { count } = useSelector(store => store.counterReducer)
    const dispatch = useDispatch()

    return (
        <>
            <div className="card">
                <h1>the count is {count}</h1>
                <button onClick={() => dispatch(decrement())}>-</button>
                <button onClick={() => dispatch(increment())}>+</button>
            </div>
        </>
    )
}
