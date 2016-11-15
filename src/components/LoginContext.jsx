import React, { Component, PureComponent } from 'react';

class LoginContext extends PureComponent {

    //获得context中的color 

    static contextTypes = {
        color: React.PropTypes.string
    }



    render() {
        return (
            <div style={{ background: this.context.color }}>logincontext</div>
        );
    }
}

export default LoginContext;