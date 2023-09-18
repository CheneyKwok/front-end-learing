import React, {useState} from "react";
import {Link, Outlet} from "react-router-dom";

function Message() {

    const [messages] = useState([
        {id: '01', title: '消息01'},
        {id: '02', title: '消息02'},
        {id: '03', title: '消息03'}
    ]);
    return (
        <div>
            <ul>
                {messages.map(message => {
                    const {id, title} = message
                    return (
                        <li key={id}>
                            {/*<a href="/message1">{message.title}</a>;*/}
                            <Link to={`/home/messages/detail/${id}/${title}`}>{title}</Link>
                        </li>
                    )
                })}
            </ul>

            <Outlet/>
        </div>
    );
}

export default Message;