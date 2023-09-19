import {create} from "zustand";
import axios from "axios";

const usePersonStore = create((setState, getState, store) => (
    {
        persons: [],
        addPerson: (personObj) => {
            setState(state => ({persons: [...state.persons, personObj]}))
        },
        fetchPersonBySearch: async (userId) => {
            const response = await axios.get(`https://api.github.com/search/users?q=${userId}`)
            const {items} = response.data
            const persons = items.map(person => ({id: person.id, name: person.login}))
            console.log(persons)
            setState(state => ({persons: persons}))
        }
    }
))

export default usePersonStore