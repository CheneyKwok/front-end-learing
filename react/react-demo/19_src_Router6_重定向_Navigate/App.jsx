import React from 'react';
import {Link, Navigate, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

function App () {
        return (
            <div>
                <div>
                    <div className="row">
                        <div className="col-xs-offset-2 col-xs-9">
                            <div className="page-header"><h2>React Router Demo</h2></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-1 col-xs-offset-2">
                            <div className="list-group">
                                {/*<a className="list-group-item" href="./about.html">About</a>*/}
                                {/*<a className="list-group-item active" href="./home.html">Home</a>*/}
                                <Link className="list-group-item" to="/about">About</Link>
                                <Link className="list-group-item" to="/home">Home</Link>
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <div className="panel">
                                <div className="panel-body">
                                    <Routes>
                                        <Route path="/about" element={<About/>}/>
                                        <Route path="/home" element={<Home/>}/>
                                        <Route path="/" element={<Navigate to="/home"/>}/>
                                    </Routes>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default App;