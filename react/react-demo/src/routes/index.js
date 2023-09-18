import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import {Navigate} from "react-router-dom";
import React from "react";
import News from "../pages/Home/News/News";
import Message from "../pages/Home/Message/Message";
import Detail from "../pages/Home/Message/Detail/Detail";

const routes = [
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/home',
        element: <Home/>,
        children: [
            {
                path: 'news',
                element: <News/>
            },
            {
                path: 'messages',
                element: <Message/>,
                children: [
                    {
                        path: 'detail',
                        element: <Detail/>
                    }
                ]
            }
        ]
    },
    {
        path: '/',
        element: <Navigate to='/home'/>
    }
]

export default routes