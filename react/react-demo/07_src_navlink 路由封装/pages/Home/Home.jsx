import React, {Component} from 'react';

class Home extends Component {
    render() {
        console.log('Home 收到的props：', this.props)
        return (
            <div>
                <h3>我是Home的内容</h3>
            </div>
        );
    }
}

export default Home;