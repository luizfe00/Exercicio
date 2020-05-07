import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { HashRouter } from 'react-router-dom'

import Routes from './Routes'
import Header from '../Components/Templates/Header'
import Nav from '../Components/Templates/Nav'
import Home from '../Components/Home/Home'

export default props => 
      <HashRouter>
        <div className="app">
          <Routes />
        </div>
      </HashRouter>
