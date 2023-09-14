import React, {Component} from 'react';
import News from "./News/News";
import Message from "./Message/Message";
import MyNavLink from "../../components/MyNavLink";
import {Route, Switch} from "react-router-dom";

class Home extends Component {
    render() {
        console.log('Home 收到的props：', this.props)
        return (
            <div>
                <div>
                    <h2>Home组件内容</h2>
                    <div>
                        <ul className="nav nav-tabs">
                            <li>
                                {/*<a className="list-group-item active" href="./home-news.html">News</a>*/}
                                <MyNavLink to="/home/news">News</MyNavLink>
                            </li>
                            <li>
                                {/*<a className="list-group-item " href="./home-message.html">Message</a>*/}
                                <MyNavLink to="/home/message">Message</MyNavLink>
                            </li>
                        </ul>
                        {/*注册路由*/}
                        <Switch>
                            <Route path="/home/news" component={News}/>
                            <Route path="/home/message" component={Message}/>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;