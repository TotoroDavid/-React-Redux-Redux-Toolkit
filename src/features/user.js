import { createSlice } from "@reduxjs/toolkit"

const initialStateValue = { name: '', age: 0, email: '' }

export const userSlide = createSlice({
    name: 'user',
    initialState: { value: initialStateValue },
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
        logout: (state) => {
            state.value = initialStateValue
        }
    },
})
export const { login, logout } = userSlide.actions

export default userSlide.reducer