
import React, { Component } from 'react';
import Side from './Side.jsx'
class App extends Component {

    //context 提供者

    static childContextTypes = {
        color: React.PropTypes.string

    }
    getChildContext() {
        return { color: 'purple' }
    }

    render() {


        return (
            <div>
                <div>
                    <Side />
                </div>
                <div>

                    {/*route切换的容器 */}
                    {

                        this.props.children
                    }
                </div>
            </div>

        );
    }
}

export default App;