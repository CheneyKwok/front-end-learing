import React, {Component} from 'react';
import './Footer.css'

class Footer extends Component {

    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked)
    }

    handleClearAllDone = () => {
        this.props.clearAllDone()
    }
    render() {
        const {todos} = this.props
        const doneCount = todos.reduce((prev, todo) => prev + (todo.done ? 1 : 0), 0)
        const total = todos.length
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={total === doneCount && total !== 0} onChange={this.handleCheckAll}/>
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{total}
                </span>
                <button className="btn btn-danger" onClick={this.handleClearAllDone}>清除已完成任务</button>
            </div>
        );
    }
}

export default Footer;