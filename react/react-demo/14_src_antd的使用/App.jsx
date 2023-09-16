import React, {Component} from 'react';
import {Col, Row, Button, DatePicker, ConfigProvider} from 'antd';

class App extends Component {
    render() {
        return (

            <div>
                <Row>
                    <Col span={8} offset={8}>
                        <Button type={"primary"}>按钮</Button>
                        <DatePicker/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;