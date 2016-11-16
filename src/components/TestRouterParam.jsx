import React, { Component } from 'react';

class TestRouter extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                {this.props.params.param1}

            </div>
        );
    }
}

export default TestRouter;
