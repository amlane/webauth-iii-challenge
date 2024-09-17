import React from "react";
import { NavLink, Route, withRouter } from "react-router-dom";
import PrivateRoute from "./components/auth/PrivateRoute";

import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";
import Users from "./components/Users";

import "./App.css";

class App extends React.Component {
  logOut = () => {
    localStorage.removeItem("token");
    this.props.history.push("/login");
  };

  render() {
    console.log("app component rendered");
    return (
      <div className="App">
        <div className="logout-cta">
          {localStorage.getItem("token") ? (
            <button onClick={this.logOut} className="logout">
              Log Out
            </button>
          ) : null}
        </div>
        <header className="App-header">
          <nav className="main-nav">
            <NavLink to="/signup">Sign Up</NavLink>{" "}
            <NavLink to="/login">Login</NavLink>{" "}
            <NavLink to="/users">Users</NavLink>{" "}
          </nav>
        </header>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute path="/users" component={Users} />
      </div>
    );
  }
}

export default withRouter(App);
