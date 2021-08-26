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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/mainpage" component={MainPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}
const Home = () => <div><h2>Home</h2></div>
export default App;