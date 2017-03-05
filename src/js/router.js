import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Home from './components/Home.js';
import App from './components/App.js';

export default (props) => (
    <Router history={ props.history }>
        <Route path='/' component={App}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path='/:id' component={() => (
                <div>
                    <strong>Invalid Route, please check the url!!</strong>
                </div>
            )}/>
        </Route>
    </Router>
)
