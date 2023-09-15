import React, {Component} from 'react';
import {Link, Route} from "react-router-dom";
import Detail from "./MessageDetail/Detail";

class Message extends Component {

    state = {
        messages: [
            {id: '01', title: '消息01'},
            {id: '02', title: '消息02'},
            {id: '03', title: '消息03'}
        ]
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.messages.map(message => {
                        const {id, title} = message
                        return (
                            <li key={id}>
                                {/*<a href="/message1">{message.title}</a>;*/}
                                <Link to={`/home/message/detail?id=${id}&title=${title}`}>{title}</Link>
                            </li>
                        )
                    })}
                </ul>
                <hr/>
                <Route path="/home/message/detail" component={Detail}/>
                {/*<Detail/>*/}
            </div>
        );
    }
}

export default Message;