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

    updateTodo = (id, done) => {
        const {todos} = this.state
        const newTodos = todos.map(value => {
            if (value.id === id) {
                return {...value, done}
            } else return value
        })
        this.setState({todos: newTodos})
    }

    deleteTodo = (id) => {
        const {todos} = this.state
        const newTodos = todos.filter(todo => todo.id !== id)
        this.setState({todos: newTodos})
    }

    checkAllTodo = (done) => {
        const {todos} = this.state
        const newTodos = todos.map(todo => {
            return {...todo, done}
        })
        this.setState({todos: newTodos})
    }

    clearAllDone = () => {
        const {todos} = this.state
        const newTodos = todos.filter(value => !value.done)
        this.setState({todos: newTodos})
    }

    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={this.state.todos} checkAllTodo={this.checkAllTodo} clearAllDone = {this.clearAllDone}/>
                </div>
            </div>
        )
    }
}