import React, { Component } from 'react';
import { browserHistory } from 'react-router';




class Child extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            value: 10
        }
    }

    handleClick = (e) => {

        e.preventDefault();

        var {callback} = { ...this.props };

        callback();
    }
    handleClick2 = (e) => {

        e.preventDefault();

        console.log(1);

        this.setState(this.state)


    }

    render() {
        return (
            <div>
                {this.state.value}
                <br />
                <a onClick={this.handleClick} href="javascript:void(0)">click</a>
                <br />
                <a onClick={this.handleClick2} href="javascript:void(0)">click2</a>
            </div>
        );
    }
}






class Form extends Component {
    //静态属性，添加static关键字，不然为实例属性(实例属性也可以写在constructor中)
    static contextTypes = {
        router: React.PropTypes.object
    };

    // submitHandle = this._submitHandle.bind(this);

    constructor(props) {
        super(props);
        this.submitHandle = this.submitHandle.bind(this);
        this.state = {
            value: 1
        }

    }

    submitHandle(e) {
        //事件对象
        e.preventDefault(e)
        const path = `/login`;
        //用history 、hashhistory处理动态跳转。 hashHistory.push(path)

        //用context中提供的router提供跳转

        this.context.router.push(path)

    }

    submitHandle1 = (e) => {
        //不用自己绑定this
        e.preventDefault(e)
        console.log(e)
    }

    submitHandle2(e) {
        //不用自己绑定this
        e.preventDefault(e)
        console.log(e)
    }




    render() {
        return (
            <div>
                <div>

                    {this.state.value}

                </div>
                <Child callback={() => { this.setState({...this.state}) } } />
                <form onSubmit={this.submitHandle}>
                    <input name="name" defaultValue="ywz" />
                    <input name="age" defaultValue="11" />
                    <input name="location" defaultValue="武汉" />
                    <input type="submit" />
                </form>
                <form onSubmit={this.submitHandle1}>
                    <input name="name" defaultValue="ywz" />
                    <input name="age" defaultValue="11" />
                    <input name="location" defaultValue="武汉" />
                    <input type="submit" />
                </form>
                <form onSubmit={(e) => { this.submitHandle2(e) } }>
                    <input name="name" defaultValue="ywz" />
                    <input name="age" defaultValue="11" />
                    <input name="location" defaultValue="武汉" />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}





export default Form;