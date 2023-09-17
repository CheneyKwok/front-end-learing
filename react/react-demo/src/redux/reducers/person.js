import {createSlice} from '@reduxjs/toolkit'

const personSlice = createSlice({
    name: 'person',
    initialState: {
        value: [
            {id: '001', name: 'xiao', age: 14}
        ]
    },
    reducers: {
        addPerson: (state, action) => {
            console.log('state', state)
            console.log('action', action)
            state.value.push(action.payload)
        }
    }
})

export const {addPerson}  = personSlice.actions
export default personSlice.reducer