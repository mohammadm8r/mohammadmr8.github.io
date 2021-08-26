import './App.css';
import React , { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import MainPage from "./MainPage/MainPage"

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/mainpage" component={MainPage} />
          </Switch>
      </Router>
    )
  }
}

export default App;