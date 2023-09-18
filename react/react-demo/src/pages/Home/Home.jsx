import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

function Home(props) {
    return (
        <div>
            <h2>Home组件内容</h2>
            <div>
                <ul className="nav nav-tabs">
                    <li>
                        {/*<a className="list-group-item active" href="./home-news.html">News</a>*/}
                        <NavLink className="list-group-item" to="news">News</NavLink>
                    </li>
                    <li>
                        {/*<a className="list-group-item " href="./home-message.html">Message</a>*/}
                        <NavLink className="list-group-item" to="messages">Messages</NavLink>
                    </li>
                </ul>
                {/*指定路由组件呈现的位置*/}
                <Outlet/>
            </div>
        </div>
    );
}

export default Home;