import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { HashRouter } from 'react-router-dom'

import Routes from './Routes'

export default props => 
      <HashRouter>
        <div className="app">
          <Routes />
        </div>
      </HashRouter>
