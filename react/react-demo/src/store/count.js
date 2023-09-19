import {create} from "zustand";

const useCountStore = create((setState, getState, store) => ({
    count: 10,
    increase: (value) => setState(state => ({count: state.count + value})),
    decrease: (value) => setState(state => ({count: state.count - value}))
    })
)

export default useCountStore