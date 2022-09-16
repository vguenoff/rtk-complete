import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/features/counterSlice'
import postsReducer from '@/features/posts/postsSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer,
    },
})
