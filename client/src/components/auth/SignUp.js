import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

import "../../App.css";

class SignUp extends React.Component {
  state = {
    username: "",
    password: "",
    department: ""
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    axios
      .post("http://localhost:5500/api/register", this.state)
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
          <h1>Sign Up</h1>

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

          <label>department</label>
          <input
            value={this.state.department}
            type="text"
            required
            name="department"
            onChange={this.handleInput}
          />

          <button type="submit">Sign Up</button>
          <p className="new-user-signup">
            Not a User? <NavLink to="/login">Log In</NavLink>
          </p>
        </form>
      </header>
    );
  }
}

export default SignUp;
