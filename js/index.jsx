
import React from 'react'
import {render} from 'react-dom'

import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

import Layout from './layout/layout.jsx'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'

//import Register from './components/register.jsx'
import Login from './components/login.jsx'
import RegisterPage from './pages/RegisterPage.jsx'

import '../web/css/bootstrap.min.css';
import '../web/css/font-awesome.min.css';
import '../web/css/main.css';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import RootReducer from './reducers/RootReducer'

var routes = (
	    <Route path="/" component={Layout}>
	      <IndexRoute component={Home} />
	      <Route path="about" component={About} />
	      <Route path="register" component={RegisterPage} />
	      <Route path="login" component={Login} />
	    </Route>    
);


let store = createStore(RootReducer);

export default class Index extends Component {
  render() {
    return (
      <Provider store={store}>
		    {() => <Router history={hashHistory} children={routes}/>}
		  </Provider>
    );
  }
};
