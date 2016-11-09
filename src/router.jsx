import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';
// import Login from './components/Login.jsx'
// import Regist from './components/Regist.jsx'
// import Main from './components/Main.jsx'
// import Form from './components/Form.jsx'
// import TestRouter from './components/TestRouterParam.jsx'
import App from './components/App.jsx'




const router = <Route path='/' component={App}>
    <IndexRoute getComponent={(nextState, callback) => {

        require.ensure([], function (require) {
            callback(null,
                require('./components/Main.jsx')
            )
        })
    } } />
    <Route path='login' getComponent={(nextState, callback) => {

        require.ensure([], function (require) {
            callback(null,
                require('./components/Login.jsx')
            )
        })
    } } />
    <Route path='regist' getComponent={(nextState, callback) => {

        require.ensure([], function (require) {
            callback(null,
                require('./components/Regist.jsx')
            )
        })
    } } />
    <Route path='form' getComponent={(nextState, callback) => {

        require.ensure([], function (require) {
            callback(null,
                require('./components/Form.jsx')
            )
        })
    } } />
    <Route path='test/:param1' getComponent={(nextState, callback) => {

        require.ensure([], function (require) {
            callback(null,
                require('./components/TestRouterParam.jsx')
            )
        })
    } } />
</Route>



export default router;