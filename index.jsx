import React from 'react';
// import { Router, browserHistory} from 'react-router';
import { render } from 'react-dom';
import router from './src/router.jsx';
import Route from 'react-router/lib/Route'
import Router from 'react-router/lib/Router'
import browserHistory from 'react-router/lib/browserHistory'


//客户端渲染

render(
    <Router routes={router} history={browserHistory} />,
    document.querySelector('#root')
)
