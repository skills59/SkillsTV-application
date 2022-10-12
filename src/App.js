import React, { Component } from 'react';
import { Route,BrowserRouter as Router,Switch,Redirect, } from "react-router-dom";
import Home from './pages/Home';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Login from './pages/Login';
import channels from './pages/channels/live';
import { auth } from './services/firebase';


function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route {...rest} render={(props) => authenticated === true ? <Component {...props} /> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />} />
  )
}

function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route {...rest} render={(props) => authenticated === false ? <Component {...props} /> : <Redirect to='/profile' />} />
  )
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      authenticated: false,
      loading: true,
    };
  }

  componentDidMount() {
    auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authenticated: true,
          loading: false,
        });
      } else {
        this.setState({
          authenticated: false,
          loading: false,
        });
      }
    })
  }

  render() {
    return this.state.loading === true ? <h2>Loading...</h2> : (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>

          <PublicRoute path="/login" authenticated={this.state.authenticated} component={Login}></PublicRoute>
          <PublicRoute path="/signup" authenticated={this.state.authenticated} component={Signup}></PublicRoute>

          <PrivateRoute path="/profile" authenticated={this.state.authenticated} component={Profile}></PrivateRoute>
          <PrivateRoute path="/channels/live" authenticated={this.state.authenticated} component={channels}></PrivateRoute>
        </Switch>
      </Router>
    );
  }
}

export default App;
