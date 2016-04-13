import React       from 'react';
import { render }  from 'react-dom';

import '../web/css/bootstrap.min.css';
import '../web/css/font-awesome.min.css';
import '../web/css/main.css';

import Root from './pages/root.jsx'

render(
  <Root />,
  document.getElementById('main')
);