
import React from 'react'
import {render} from 'react-dom'

import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

import Layout from './layout/layout.jsx'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'

import '../web/css/bootstrap.min.css';
import '../web/css/font-awesome.min.css';
import '../web/css/main.css';

var rootInstance = render((
	<Router history={hashHistory}>
	    <Route path="/" component={Layout}>
	      <IndexRoute component={Home} />
	      <Route path="about" component={About} />
	    </Route>
    </Router>
), document.getElementById('main'));
