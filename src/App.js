import React, { Component } from 'react';
import Login from './components/login';
import Header from './components/header';
import Dashboard from './components/dashboard';
import history from './util/history';
import {Route, Router} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact={true} path='/login' render={() => (
            <div className="App">
              <Header/>
              <Login />
            </div>
          )}/>
          <Route exact={true} path='/' render={() => (
            <div className="App">
              <Header/>
              <Dashboard />
            </div>
          )}/>
        </div>
      </Router>
    );
  }
}
export default App;
