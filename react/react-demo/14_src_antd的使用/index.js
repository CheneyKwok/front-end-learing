import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App";
import {ConfigProvider} from "antd";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render((
    <React.StrictMode>
        <ConfigProvider
            theme={{
                token: {
                    // Seed Token，影响范围大
                    colorPrimary: '#00a389',
                    borderRadius: 2,

                    // 派生变量，影响范围小
                    colorBgContainer: '#f6ffed',
                },
            }}
        >
            <App/>
        </ConfigProvider>
    </React.StrictMode>
))