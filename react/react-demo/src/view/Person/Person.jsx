import React, {useRef} from 'react';
import {nanoid} from "nanoid";
import usePersonStore from "../../store/person";
import useCountStore from "../../store/count";

function Person() {

    const persons = usePersonStore(state => state.persons)
    const addPerson = usePersonStore(state => state.addPerson)
    const fetchPersonBySearch = usePersonStore(state => state.fetchPersonBySearch)
    const count = useCountStore(state => state.count);
    const personInputRef = useRef(null);
    const searchInputRef = useRef(null);

    function handleAddPerson (){
        const name = personInputRef.current.value
        const personObj = {id: nanoid(), name}
        addPerson(personObj)
    }

    async function handleSearch() {
        const {value} = searchInputRef.current
        await fetchPersonBySearch(value)
    }

    return (
        <div>
            <h2>我是Person组件</h2>
            <h2>上方组件的总数为: {count}</h2>
            <div style={{display: "flex"}}>
                <div>
                    <input ref={personInputRef} type="text" placeholder="输入名字"/>
                    <button onClick={handleAddPerson}>添加</button>
                </div>
                &nbsp;&nbsp;&nbsp;
                <div>
                    <input ref={searchInputRef} type="text" placeholder="输入关键字点击搜索"/>&nbsp;
                    <button onClick={handleSearch}>搜索</button>
                </div>
            </div>

            <ul>
                {
                    persons.map((p) => {
                        return <li key={p.id}>{p.name}</li>
                    })
                }
            </ul>

        </div>
    );
}

export default Person
