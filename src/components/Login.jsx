import React, { Component } from 'react';

class Login extends Component {

    //获得context中的color

    static contextTypes = {
        color: React.PropTypes.string
    }
    render() {
        return (
            <div style={{ background: this.context.color }}>login</div>
        );
    }
}

export default Login;