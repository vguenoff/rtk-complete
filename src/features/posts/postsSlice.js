import { createSlice, nanoid } from '@reduxjs/toolkit'

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
        addPost: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId,
                    },
                }
            },
        },
    },
})

// exporting action creator automatically generated from the postSlice
export const { addPost } = postsSlice.actions

export default postsSlice.reducer
