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

    replaceShow = (id, title) => {
        console.log(id, title)
        // this.props.history.replace(`/home/message/detail/${id}/${title}`)
        // this.props.history.replace(`/home/message/detail`, {id, title})
        this.props.history.push(`/home/message/detail`, {id, title})
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
                                <Link to={{pathname:'/home/message/detail', state: {id, title}}}>{title}</Link>
                                &nbsp;<button onClick={() => this.replaceShow(id, title)}>replace查看</button>
                            </li>
                        )
                    })}
                </ul>
                <hr/>
                <Route path="/home/message/detail" component={Detail}/>
            </div>
        );
    }
}

export default Message;