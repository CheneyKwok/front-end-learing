import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom'
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import MyNavLink from "./components/MyNavLink";
import Header from "./components/Header/Header";

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Header/>
                    <div className="row">
                        <div className="col-xs-1 col-xs-offset-2">
                            <div className="list-group">
                                {/*<a className="list-group-item" href="./about.html">About</a>*/}
                                {/*<a className="list-group-item active" href="./home.html">Home</a>*/}
                                <MyNavLink  to="/about">About</MyNavLink>
                                <MyNavLink to="/home">Home</MyNavLink>
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <div className="panel">
                                <div className="panel-body">
                                    <Switch>
                                        <Route path="/about" component={About}/>
                                        <Route path="/home" component={Home}/>
                                        <Redirect to="/about"/>
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;