import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Routes from './Routes'
import Header from '../Components/Templates/Header'
import Nav from '../Components/Templates/Nav'
import Footer from '../Components/Templates/Footer';



class App extends Component {

  render() {
    return (
      <Provider>
        <HashRouter>
          <div className="app">
            <Nav />
            <Header />
            <Routes />
            <Footer />
          </div>
        </HashRouter>
      </Provider>
    )
  }
}
export default App
