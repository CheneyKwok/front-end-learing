import {createSlice} from '@reduxjs/toolkit'

const countSlice = createSlice({
    name: 'count',
    initialState: {
        value: 0
    },
    reducers: {
        incremented: (state, action) => {
            console.log(action)
            state.value += action.payload * 1
        },
        decremented: (state, action) => {
            state.value -= action.payload * 1
        }
    }
})

export const {incremented, decremented} = countSlice.actions
export default countSlice.reducer