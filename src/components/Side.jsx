import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';


const ACTIVE = {
    color: 'red'
}

class NavLink extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (<Link activeStyle={ACTIVE} {...this.props} />);
    }
}





class Side extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <IndexLink activeStyle={ACTIVE} to="/">Homeqqqqqq</IndexLink>
                    </li>
                    <li>
                        <Link activeStyle={ACTIVE} to="/login">loging</Link>
                    </li>
                    <li>
                        <NavLink to="/regist">regist</NavLink>
                    </li>
                    <li>
                        <NavLink to="/form">form1111</NavLink>
                    </li>
                    <li>
                        <NavLink to="/test/test">test params1444444444444444</NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Side;