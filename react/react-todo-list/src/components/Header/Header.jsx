import React, {Component} from 'react';
import {nanoid} from "nanoid";
import './Header.css'

class Header extends Component {

    handleOnKeyUp = (event) => {
        const {key, target} = event
        if (key === 'Enter') {
            console.log('输入', target.value)
            if (target.value.trim() === '') {
                alert('输入不能为空')
                return
            }
            const todoObj = {
                id: nanoid(),
                name: target.value,
                done: false
            }
            this.props.addTodo(todoObj)
            target.value = ''
        }
    }
    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleOnKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        );
    }
}

export default Header;