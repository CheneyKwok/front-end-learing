import React, {Component} from 'react';
import {nanoid} from "nanoid";
import {connect} from "react-redux";
import {addPerson, fetchUserBySearch} from '../../store/features/person'

class Person extends Component {

    addPerson = () => {
        const name = this.nameNode.value
        const personObj = {id: nanoid(), name}
        this.props.addPerson(personObj)
    }
    handleSearch = async () => {
        const {value} = this.keyWordNode
        this.props.fetchUserBySearch(value)
    }
    render() {
        return (
            <div>
                <h2>我是Person组件</h2>
                <h2>上方组件的总数为: {this.props.count}</h2>
                <input ref={c=>this.nameNode = c} type="text" placeholder="输入名字"/>
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.persons.map((p)=>{
                            return <li key={p.id}>{p.name}</li>
                        })
                    }
                </ul>
                <div>
                    <input ref={c => this.keyWordNode = c} type="text" placeholder="输入关键字点击搜索"/>&nbsp;
                    <button onClick={this.handleSearch}>搜索</button>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        persons: state.person.value,
        count: state.count.value
    }),
    {
        addPerson,
        fetchUserBySearch
    }
)(Person)
