import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: '1',
        title: 'Learning Redux Toolkit',
        content: "I've heard good things about RTK.",
    },
    {
        id: '2',
        title: 'Slices...',
        content: 'The more I say slice, the more I want pizza.',
    },
]

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost(state, action) {
            state.push(action.payload)
        },
    },
})

// exporting action creator automatically generated from the postSlice
export const { addPost } = postsSlice.actions

export default postsSlice.reducer
