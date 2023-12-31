import React, {Component} from 'react';
import Item from "../Item/Item"
import './List.css'

class List extends Component {
    render() {
        const {todos} = this.props
        const {updateTodo, deleteTodo} = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map(todo => <Item key = {todo.id} {...todo} updateTodo = {updateTodo} deleteTodo = {deleteTodo}/>)
                }
            </ul>
        );
    }
}

export default List;