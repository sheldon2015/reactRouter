import React, { Component } from 'react';
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
                {
                    this.props.name
                }
                <br />
                <a onClick={this.handleClick} href="javascript:void(0)">click</a>
                <br />
                <a onClick={this.handleClick2} href="javascript:void(0)">click2</a>
            </div>
        );
    }
}


Child.defaultProps = {
    name: 'Stranger'
};


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

    componentDidMount() {
        this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave)
    }


    routerWillLeave = (nextLocation) => {
        return 'Your work is not saved! Are you sure you want to leave  form?'

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

        console.log('this.component', this.component);
    }

    render() {

        const props = {
            firstName: 'Ben',
            lastName: 'Hector',
            callback: () => this.setState(Object.assign({}, this.state, { value: ++this.state.value }))
        }

        return (
            <div>
                <div>

                    {this.state.value}

                </div>
                {/*获取组建的引用*/}
                <Child ref={(com) => { this.component = com;  } }  {...props} />
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