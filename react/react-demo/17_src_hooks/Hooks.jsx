import {useState, useEffect, useRef} from 'react';

function Hooks(props) {
    const [count, setCount] = useState(0);
    const inputRef = useRef()
    useEffect(() => {
        console.log('@')
        const timer = setInterval(() => {
            console.log(111)
            setCount(count => count + 1)
        }, 1000)
        return () => {
            console.log('componentWillUnmount')
            clearInterval(timer)
        }
    }, [])

    function add() {
        // setCount(count + 1)
        setCount(count => count + 1)
    }

    function show() {
        alert(inputRef.current.value)
    }

    //卸载组件的回调
    function unmount() {
        console.log(props.root);
        props.root.unmount()
    }

    return (
        <div>
            <input type="text" ref={inputRef}/>
            <h2>当前count为：{count}</h2>
            <button onClick={add}>点我+1</button>
            <button onClick={unmount}>卸载组件</button>
            <button onClick={show}>点我提示数据</button>
        </div>
    );
}

export default Hooks;