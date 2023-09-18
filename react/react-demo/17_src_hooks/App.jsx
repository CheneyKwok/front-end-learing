import React, {Component} from 'react';
import Hooks from "./Hooks";

class App extends Component {
    render() {
        return (
            <div>
                <Hooks root={this.props.root}/>
            </div>
        );
    }
}

export default App;