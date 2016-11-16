
import React, { Component, PureComponent } from 'react';
import Side from './Side.jsx';

import Immutable from 'immutable';

import axios from 'axios';




class Test extends PureComponent {
    constructor(props, context) {
        super(props);

        this.state = {
            text: 'aaaaaaaaaa'
        }

    }
    clickHandle = (e) => {
        const map1 = Immutable.Map(this.state)
        console.log(map1.toObject())


        //seq延迟执行，当下面oddsqures调用，才会去执行filter，map方法
        //因为get的索引为1所以map中至少需要两个元素，所以filter中至少要找到两个元素


        var oddSquares = Immutable.Seq.of(1, 2, 3, 4, 5, 6, 7, 8)
            .filter(x => {

                console.log(x)

                return x % 2
            })
            .map(x => {
                console.log(x)
                return x * x
            });

        console.log(oddSquares.get(1));


        //批处理
        var list1 = Immutable.List.of(1, 2, 3);
        var list2 = list1.withMutations(function (list) {

            list.push(4).push(5).push(6);

        });

        this.setState(map1)

    }
    render() {

        console.log('app');
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


    componentWillMount() {

        axios.get('/data.json').then(res => {

            this.setState({ color: 'purple' })

        }).catch(err => {
            console.log(err)

        })


    }





    clickHandle = (e) => {




        this.setState({})

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