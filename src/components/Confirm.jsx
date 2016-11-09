import React from 'react';

const Confirm = React.createClass({


    componentDidMount() {
        this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave)
    },


    routerWillLeave(nextLocation) {
        return 'Your work is not saved! Are you sure you want to leave confirm?'

    },
    render() {

        return (
            <div>

                confirm

            </div>
        )



    }
})

export default Confirm;