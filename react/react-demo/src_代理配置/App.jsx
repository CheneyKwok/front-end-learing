import React, {Component} from 'react';
import axios from "axios";

class App extends Component {

    getStudentData = () => {
     axios.get('http://localhost:3000/api/students')
         .then(response => {
             console.log(response.data)}, err => {
             console.log('失败了', err)})
    }
    render() {
        return (
            <div>
                <button onClick={this.getStudentData}>点击获取学生数据</button>
            </div>
        );
    }
}

export default App;