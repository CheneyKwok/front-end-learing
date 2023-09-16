import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'

class Header extends Component {

    goBack = () => {
        this.props.history.goBack()
    }
    goForward = () => {
        this.props.history.goForward()
    }
    render() {
        return (
            <div className="row">
                <div className="col-xs-offset-2 col-xs-9">
                    <div className="page-header">
                        <h2>React Router Demo</h2>
                        <button onClick={this.goBack}>回退</button>
                        <button onClick={this.goForward}>前进</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Header);