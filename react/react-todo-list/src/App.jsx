import React, {Component} from "react"
import Header from './components/Header/Header'
import List from "./components/List/List"
import Footer from "./components/Footer/Footer"
import './App.css'

export default class App extends Component {

    state = {
        todos: [
            {id: '001', name: '吃饭', done: true},
            {id: '002', name: '睡觉', done: false},
            {id: '003', name: '打代码', done: false},
            {id: '004', name: '逛街', done: false}
        ]
    }
    addTodo = (todoObj) => {
        const {todos} = this.state
        const newTodos = [todoObj, ...todos]
        this.setState({todos: newTodos})
    }
    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo = {this.addTodo}/>
                    <List todos = {this.state.todos}/>
                    <Footer/>
                </div>
            </div>
        )
    }
}