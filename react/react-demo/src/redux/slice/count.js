import {createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {

        value: 0
    },
    reducers: {
        incremented: (state, action) => {
            state.value += action.payload * 1
        },
        decremented: (state, action) => {
            state.value -= action.payload * 1
        }
    }
})

export const {incremented, decremented} = counterSlice.actions
export default counterSlice.reducer