import React, {Component} from 'react';
import {connect} from 'react-redux'
import {decremented, incremented} from "../../redux/slice/count";

class Count extends Component {

    increment = () => {
        const {value} = this.selectNumber
        this.props.incr(value)
    }

    decrement = () => {
        const {value} = this.selectNumber
        this.props.decr(value * 1)
    }

    render() {

        return (
            <div>
                <h2>我是Count组件,下方组件总人数为:{this.props.count}</h2>
                <h4>当前求和为：{this.props.count}</h4>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>
                &nbsp;
                <button onClick={this.decrement}>-</button>
                &nbsp;
                {/*<button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;*/}
                {/*<button onClick={this.incrementAsync}>异步加</button>&nbsp;*/}
            </div>
        );
    }
}

export default connect(
    state => ({
        count: state.counter.value
    }),
    {
        incr: incremented,
        decr: decremented
    }
)(Count)