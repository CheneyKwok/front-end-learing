import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import {Navigate} from "react-router-dom";
import React from "react";

const routes = [
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/home',
        element: <Home/>
    },
    {
        path: '/',
        element: <Navigate to='/home'/>
    }
]

export default routes