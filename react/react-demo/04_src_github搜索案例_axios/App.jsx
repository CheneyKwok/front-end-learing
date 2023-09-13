import React, {Component} from 'react';
import Search from "./components/Search/Search";
import List from "./components/List/List";

class App extends Component {

    state = {
        users: [],
        isFirst: true,
        isLoading: false,
        err: ''
    }

    updateAppState = state => {
        this.setState(state)
    }

    render() {
        const {users} = this.state
        return (
            <div className="container">
                <Search updateAppState={this.updateAppState}/>
                <List {...this.state}/>
            </div>
        )
    }
}

export default App;