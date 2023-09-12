import React, {Component} from 'react';
import axios from "axios";

class Search extends Component {

    handleSearch = () => {
        // 获取用户输入信息
       const {value: keyWord} = this.keyWordNode
        console.log('search', keyWord)
        this.props.updateAppState({isFirst: false, isLoading: true})
        axios.get(`https://api.github.com/search/users?q=${keyWord}`)
            .then(response => {
                this.props.updateAppState({isLoading: false, users: response.data.items})
            }, reason => {
                console.error('获取失败', reason)
                this.props.updateAppState({isLoading: false, err: reason.message})
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