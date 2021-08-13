import { createSlice } from "@reduxjs/toolkit"

const initialStateValue = ''

export const themeSlide = createSlice({
    name: 'theme',
    initialState: { value: initialStateValue },
    reducers: {
        changeColor: (state, action) => {
            state.value = action.payload
        }
    },
})
export const { changeColor } = themeSlide.actions

export default themeSlide.reducer