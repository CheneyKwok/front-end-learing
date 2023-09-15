import React, {Component} from 'react';
import {Link, Route, Switch} from "react-router-dom";
import Detail from "./MessageDetail/Detail";
import MyNavLink from "../../../components/MyNavLink";

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
                        return (
                            <li key={message.id}>
                                {/*<a href="/message1">{message.title}</a>;*/}
                                <Link to={`/home/message/detail/${message.id}/${message.title}`}>{message.title}</Link>
                            </li>
                        )
                    })}
                </ul>
                <hr/>
                <Route path="/home/message/detail/:id/:title" component={Detail}/>
                {/*<Detail/>*/}
            </div>
        );
    }
}

export default Message;