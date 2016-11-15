
import React, { Component, PureComponent } from 'react';
import Side from './Side.jsx';




class Test extends PureComponent {
    constructor(props, context) {
        super(props);
        this.state = {
            text: 'aaaaaaaaaa'
        }

    }
    clickHandle = (e) => {

        this.setState({
            test: 'xxxxxxxxxxxxxxxx'

        })

    }
    render() {
        return (
            <div>

                <div>

                    <a href="javascript:void(0)" onClick={this.clickHandle}>change test</a>

                </div>


                <div>
                    this id  color {this.props.color}
                </div>
                <div>
                    this id  test {this.state.test}
                </div>
            </div>
        );
    }
}





class App extends Component {

    //context 提供者

    static childContextTypes = {
        color: React.PropTypes.string

    }

    constructor(props, context) {
        super(props);
        this.state = {
            color: 'red'
        }

    }
    getChildContext() {
        return { color: this.state.color }
    }

    clickHandle = (e) => {

        this.setState({
            color: 'black'

        })

    }



    render() {

        console.log(this.state.color);


        return (
            <div>



                {this.state.color}

                <Test color={this.state.color} />
                <div>

                    <a href="javascript:void(0)" onClick={this.clickHandle}>change color</a>

                </div>
                <div>
                    <Side bcg={this.state.color} />
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