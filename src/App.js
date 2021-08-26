import './App.css';
import React , { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Home from "./MainPage/Home"

class App extends Component {
  render() {
    return (
      <Router basename='/'>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App;