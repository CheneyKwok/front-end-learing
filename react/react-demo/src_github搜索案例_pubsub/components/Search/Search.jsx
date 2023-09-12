import React, {Component} from 'react';
import PubSub from "pubsub-js";
import axios from "axios";

class Search extends Component {

    handleSearch = () => {
        // 获取用户输入信息
       const {value: keyWord} = this.keyWordNode
        console.log('search', keyWord)
        PubSub.publish('list-state-msg', {isFirst: false, isLoading: true})
        axios.get(`https://api.github.com/search/users?q=${keyWord}`)
            .then(response => {
                PubSub.publish('list-state-msg', {isLoading: false, users: response.data.items})
            }, reason => {
                console.error('获取失败', reason)
                PubSub.publish('list-state-msg', {isLoading: false, err: reason.message})
            })
    }

    render() {
        return (
            <div>
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">搜索 Github 用户</h3>
                    <div>
                        <input ref={c => this.keyWordNode = c} type="text" placeholder="输入关键字点击搜索"/>&nbsp;
                        <button onClick={this.handleSearch}>搜索</button>
                    </div>
                </section>
            </div>
        );
    }
}

export default Search;