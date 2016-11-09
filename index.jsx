import React from 'react';
import { Router, browserHistory} from 'react-router';
import { render } from 'react-dom';
import router from './src/router.jsx';



//客户端渲染

render(
    <Router routes={router} history={browserHistory} />,
    document.querySelector('#root')
)
