import {useState} from "react";
import {Link, Outlet, useNavigate} from "react-router-dom";

function Message() {

    const [messages] = useState([
        {id: '01', title: '消息01'},
        {id: '02', title: '消息02'},
        {id: '03', title: '消息03'}
    ]);
    const navigate = useNavigate()
    const showDetail = (message => {
        navigate('detail', {
            state: message
        })
    });

    return (
        <div>
            <ul>
                {messages.map(message => {
                    const {id, title} = message
                    return (
                        <li key={id}>
                            {/*<a href="/message1">{message.title}</a>;*/}
                            {/*<Link to='detail' state={{id, title}}>{title}</Link>*/}
                            <p>{title}</p>
                            <button onClick={() => showDetail(message)}>点击查看详情</button>
                        </li>
                    )
                })}
            </ul>
            <Outlet/>
        </div>
    );
}

export default Message;