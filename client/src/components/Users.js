import React from "react";
import axios from "axios";
import withAuth from "./auth/withAuth";

class Users extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5500/api/users")
      .then(res => {
        console.log(res);
        this.setState(() => ({
          users: res.data
        }));
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <header className="App-header">
        <h1>Users List</h1>
        {this.state.users.map(user => {
          return <p key={user.id}>{user.username}</p>;
        })}
      </header>
    );
  }
}

export default withAuth(Users);
