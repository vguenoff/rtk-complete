import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '@/features/counterSlice'

export default function Counter() {
    const { count } = useSelector(store => store.counterReducer)
    const dispatch = useDispatch()

    return (
        <>
            <div className="card">
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
                <div>count is {count}</div>
            </div>
        </>
    )
}
