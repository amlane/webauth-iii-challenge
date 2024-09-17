import React from "react";
import { axiosWithAuth } from "./auth/axiosWithAuth";

import "../App.css";

class Users extends React.Component {
  state = {
    users: [],
    error: ""
  };

  componentDidMount() {
    axiosWithAuth()
      .get("http://localhost:5500/api/users")
      .then(res => {
        console.log("users response", res);
        this.setState(() => ({
          users: res.data
        }));
      })
      .catch(error => {
        console.log(error.response);
        this.setState({
          error: error.response.data
        });
      });
  }

  render() {
    console.log("users component rendered");
    return (
      <header className="App-header">
        <h2>Users List</h2>
        {this.state.error === "" ? null : (
          <p>{this.state.error.message}. Please log in.</p>
        )}
        <div className="user-cta">
          {this.state.users.map(user => {
            return (
              <p className="users" key={user.id}>
                {user.username}
              </p>
            );
          })}
        </div>
      </header>
    );
  }
}

export default Users;
