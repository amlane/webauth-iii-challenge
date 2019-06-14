import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

import "../../App.css";

class Login extends React.Component {
  state = {
    username: "admin",
    password: "123"
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    axios
      .post("http://localhost:5500/api/login", this.state)
      .then(res => {
        // console.log(res);
        localStorage.setItem("token", res.data.token);
        this.props.history.push("/users");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <header className="App-header">
        <form onSubmit={this.handleSubmit} className="login-form">
          <h1>Log In</h1>

          <label>username</label>
          <input
            value={this.state.username}
            type="text"
            required
            name="username"
            onChange={this.handleInput}
          />

          <label>password</label>
          <input
            value={this.state.password}
            type="password"
            required
            name="password"
            onChange={this.handleInput}
          />

          <button type="submit">Log In</button>
          <p className="new-user-signup">
            Not a User? <NavLink to="/signup">Sign Up</NavLink>
          </p>
        </form>
      </header>
    );
  }
}

export default Login;
