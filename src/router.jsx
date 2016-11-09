import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';
import Login from './components/Login.jsx'
import Regist from './components/Regist.jsx'
import Main from './components/Main.jsx'
import Form from './components/Form.jsx'
import TestRouter from './components/TestRouterParam.jsx'
import App from './components/App.jsx'




const router = <Route path='/' component={App}>
    <IndexRoute component={Main} />
    <Route path='login' component={Login} />
    <Route path='regist' component={Regist} />
    <Route path='form' component={Form} />
    <Route path='test/:param1' component={TestRouter} />
</Route>



export default router;