import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home/Home';
import './App.css';
import CallRegistry from './pages/CallsRegistry/CallRegistry';
import Error404 from './pages/404/404';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/chamados" component={Home} />
          <Route exact path="/registro"  component={CallRegistry} />
          <Redirect from="/" to="/chamados" />          
        </Switch>
      </Router>
    );
  }
}

export default App;
