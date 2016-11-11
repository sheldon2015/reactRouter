import React, { Component } from 'react';
// import { Route, IndexRoute } from 'react-router';
// import Login from './components/Login.jsx'
// import Regist from './components/Regist.jsx'
// import Main from './components/Main.jsx'
//import Form from './components/Form.jsx'
// import TestRouter from './components/TestRouterParam.jsx'
import App from './components/App.jsx'



//减少引入的代码
import Route from 'react-router/lib/Route'
import IndexRoute from 'react-router/lib/IndexRoute'







//当用es6的形式定义模块时，运用import导入和require导入有区别。
//require导入时需要添加default


const router =
    <Route path='/' component={App}>
        <IndexRoute getComponent={(nextState, callback) => {

            require.ensure([], function (require) {
                callback(null,
                    require('./components/Main.jsx').default
                )
            })
        } } />
        <Route path='login' getComponent={(nextState, callback) => {

            require.ensure([], function (require) {
                callback(null,
                    require('./components/Login.jsx').default
                )
            })
        } } />
        <Route path='regist' getComponent={(nextState, callback) => {

            require.ensure([], function (require) {
                callback(null,
                    require('./components/Regist.jsx').default
                )
            })
        } } />
        <Route path='form' getComponent={(nextState, callback) => {

            require.ensure([], function (require) {
                callback(null,
                    require('./components/Form.jsx').default
                )
            })
        } } />
        <Route path='test/:param1' getComponent={(nextState, callback) => {

            require.ensure([], function (require) {
                callback(null,
                    require('./components/TestRouterParam.jsx').default
                )
            })
        } } />
        <Route path='confirm' getComponent={(nextState, callback) => {

            require.ensure([], function (require) {
                callback(null,
                    require('./components/Confirm.jsx').default
                )
            })
        } } />
        <Route path='color' getComponent={(nextState, callback) => {

            require.ensure([], function (require) {
                callback(null,
                    require('./components/Color.jsx').default.Black
                )
            })
        } } />
        <Route path='list' getComponent={(nextState, callback) => {

            require.ensure([], function (require) {
                callback(null,
                    require('./components/List.jsx').default
                )
            })
        } } />

    </Route>



export default router;