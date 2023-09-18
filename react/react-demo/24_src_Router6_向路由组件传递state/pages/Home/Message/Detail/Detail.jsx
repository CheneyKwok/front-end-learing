import {useLocation} from 'react-router-dom'

const details = [
    {id: '01', content: '你好，这是消息01的内容'},
    {id: '02', content: '你好，这是消息02的内容'},
    {id: '03', content: '你好，这是消息03的内容'}
]

function Detail(props) {
    const {state} = useLocation()
    console.log(state)
    const {id, title} = state
    const detail = details.find(detail => detail.id === id) || {}
    return (
        <div>
            <ul>
                <li>{id}</li>
                <li>{title}</li>
                <li>{detail.content}</li>
            </ul>
        </div>
    );
}

export default Detail;