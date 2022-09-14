import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    increment,
    decrement,
    reset,
    incrementByAmount,
} from '@/features/counterSlice'

export default function Counter() {
    const [amount, setAmount] = useState(1)

    const { count } = useSelector(store => store.counterReducer)
    const dispatch = useDispatch()

    return (
        <div className="card">
            <h1>the count is {count}</h1>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(reset())}>reset</button>
            <div>
                <button onClick={() => dispatch(incrementByAmount(amount))}>
                    Increment By Amount
                </button>
                <input
                    type="number"
                    value={amount}
                    onChange={({ target }) => setAmount(Number(target.value))}
                />
            </div>
        </div>
    )
}
