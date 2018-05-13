import React from "react";
import '../css/style.css';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import About from "./About";
import CheckIn from "./CheckIn";
import MapContainer from "./MapContainer";
// import PrivateRoute from './PrivateRoute';
import SignUpContainer from "./Admin";


import PrivateRoute from "../PrivateRoute";
import app from "../base";

// import Home from "../Home";
import LogIn from "../LogIn";
import SignUp from "../SignUp";
import Clinton from "./GetInfo";
import Clinton2 from './GetInfo2';

class Main extends React.Component {
  state = { loading: true, authenticated: false, user: null };
  componentWillMount() {
    app.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }
  render() {
    const { authenticated, loading } = this.state;

    if (loading) {
      return <p>Loading..</p>;
    }

    return (
      <Router>
      <div>
      <Switch>
        <Route exact path="/" component={MapContainer} />
        <Route path="/check-in" component={CheckIn} />
        <Route path="/about" component={About} />
        <Route path="/login" component={LogIn} />
        <Route path="/view-data" component={Clinton} />
        <Route path="/view-data2" component={Clinton2} authenticated={this.state.authenticated}/>}
        <PrivateRoute path="/register-1621" component={SignUpContainer} authenticated={this.state.authenticated}/>
      </Switch>
    </div>
    </Router>

    )
  };
   
}

export default Main;