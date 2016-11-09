
import React, { Component } from 'react';
import Side from './Side.jsx'
class App extends Component {
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