import React from "react";
import { NavLink, Route } from "react-router-dom";

import Home from "./components/Home";
import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";
import Users from "./components/Users";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="main-nav">
          <NavLink exact to="/">
            Home
          </NavLink>{" "}
          <NavLink to="/signup">Sign Up</NavLink>{" "}
          <NavLink to="/login">Login</NavLink>{" "}
          <NavLink to="/users">Users</NavLink>{" "}
        </nav>
      </header>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/users" component={Users} />
    </div>
  );
}

export default App;
