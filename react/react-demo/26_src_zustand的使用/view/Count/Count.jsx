import useCountStore from "../../store/count";
import {useRef} from "react";
import usePersonStore from "../../store/person";

export default function Count() {

    const count = useCountStore(state => state.count)
    const increase = useCountStore(state => state.increase)
    const decrease = useCountStore(state => state.decrease)
    const persons = usePersonStore(state => state.persons)
    const selectRef = useRef(null);

    const increment = () => {
        increase(selectRef.current.value * 1)
    }

    const decrement = () => {
        decrease(selectRef.current.value * 1)
    }

    return (
        <div>
            <h2>我是Count组件,下方组件总人数为:{persons.length}</h2>
            <h4>当前求和为：{count}</h4>
            <select ref={selectRef}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>&nbsp;
            <button onClick={increment}>+</button>
            &nbsp;
            <button onClick={decrement}>-</button>
            &nbsp;
        </div>
    );
}