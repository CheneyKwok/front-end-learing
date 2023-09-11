import React, {Component} from 'react';
import Item from "../Item/Item"
import './List.css'

class List extends Component {
    render() {
        return (
            <ul className="todo-main">
                <Item/>
                <Item/>
            </ul>
        );
    }
}

export default List;