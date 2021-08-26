import './App.css';
import React , { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";

import MainPage from "./MainPage/MainPage"

class App extends Component {
  render() {
    return (
      <Router basename='/'>
        <div>
          <Link to="/mainpage">About</Link>
          <Switch>
            <Route exact path="/mainpage" component={MainPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;