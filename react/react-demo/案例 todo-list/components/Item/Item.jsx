import React, {Component} from 'react';
import './Item.css'

class Item extends Component {

    state = {mouse: false}

    handleMouse = (flag) => {
        return () => {
            this.setState({mouse: flag})
        }
    }
    handleCheck = (id) => {
        return (event) => {
            console.log(id, event.target.checked)
            this.props.updateTodo(id, event.target.checked)
        }
    }
    handleClickDelete = (id) => {
        if (window.confirm('确定删除吗')) {
            this.props.deleteTodo(id)
        }
    }
    render() {
        const {id, name, done} = this.props
        const {mouse} = this.state
        return (
            <li onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} style={{backgroundColor: mouse ? '#ddd': '#fff'}}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{display: mouse ? 'block': 'none'}} onClick={() => this.handleClickDelete(id)}>删除</button>
            </li>
        );
    }
}

export default Item;