import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './common/Landing';
import './App.css';
import 'animate.css/animate.css';

class App extends Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    return (
      <Router>
          <React.Fragment>
                <Switch>
                  <Route exact path="/" component={Landing} />
                </Switch>
          </React.Fragment>
      </Router>
    );
  }
}

export default App;
