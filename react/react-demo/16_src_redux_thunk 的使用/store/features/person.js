import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios";

const personSlice = createSlice({
    name: 'person',
    initialState: {
        value: []
    },
    reducers: {
        addPerson: (state, action) => {
            state.value.push(action.payload)
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchUserBySearch.fulfilled, (state, action) => {
            console.log(action.payload)
            const {items} = action.payload
            state.value = items.map(user => ({id: user.id, name: user.login}))
        })
    }
})
 export const fetchUserBySearch = createAsyncThunk(
    'users/fetchUserById',
    async (userId, thunkAPI) => {
        console.log('fetchUserById, userId:', userId)
        const response = await axios.get(`https://api.github.com/search/users?q=${userId}`)
        return response.data
    }
)
export const {addPerson}  = personSlice.actions
export default personSlice.reducer