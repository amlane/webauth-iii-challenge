import React from "react";
import axios from "axios";
import "../../App.css";

axios.interceptors.request.use(
  config => {
    config.headers.authorization = localStorage.getItem("token");

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

const token = localStorage.getItem("token");

// could be process.env.API_URL
// axios.defaults.baseURL = 'http://localhost:5500/api';

export default function(Component) {
  return class Authenticated extends React.Component {
    render() {
      const notLoggedIn = (
        <p className="App-header">Please login to see our users</p>
      );

      return <>{token ? <Component {...this.props} /> : notLoggedIn}</>;
    }
  };
}
