import React, {Component} from 'react';
import {render } from 'react-dom';
import {Route,Router,IndexRoute, browserHistory} from 'react-router';
import App from './components/App';
import HomePage from  './components/home/HomePage';
import DetailPage from  './components/detail/DetailPage';
render(
    <Router history = {browserHistory}>
        <Route  path="/" component = {App}>
            <IndexRoute component={HomePage} />
            <Route path="detail/:name" component={DetailPage} />
        </Route>
        </Router>,
    document.getElementById("app")
)
