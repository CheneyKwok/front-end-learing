import React, {Component} from 'react';
import PubSub from "pubsub-js";
import './List.css'

class List extends Component {
    state = {
        users: [],
        isFirst: true,
        isLoading: false,
        err: ''
    }

    componentDidMount() {
        PubSub.subscribe('list-state-msg', (msg, state) => {
            this.setState(state)
        })
    }

    render() {
        const {users, isFirst, isLoading, err} = this.state
        return (
            <div>
                <div className="row">
                    {
                        isFirst ? <h2>欢迎使用，输入关键字点击搜索</h2> :
                            isLoading ? <h2>加载中...</h2> :
                                err ? <h2 style={{color: "red"}}>{err}</h2> :
                                    users.map(user => {
                                        const {id, avatar_url, html_url, login} = user
                                        return (
                                            <div key={id} className="card">
                                                <a href={html_url} target="_blank">
                                                    <img src={avatar_url} style={{width: '100px'}}/>
                                                </a>
                                                <p className="card-text">{login}</p>
                                            </div>
                                        )
                                    })
                    }
                </div>
            </div>
        );
    }
}

export default List;