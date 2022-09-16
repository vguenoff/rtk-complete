import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: '0', name: 'Dude Lobowski' },
    { id: '1', name: 'Neil Young' },
    { id: '2', name: 'Dave Gray' },
]

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
})

export default userSlice.reducer
