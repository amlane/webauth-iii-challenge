import React from 'react';

import '../App.css';

class Login extends React.Component{
    state = {
        username: '',
        password: ''
    }

    render(){
        return (
            <header className="App-header">
              <form className="login-form">
              <p>Login</p>
              <label>username</label>
              <input 
              />
              <label>password</label>
              <input 
              />
              <button type="submit">login</button>
              </form>
            </header>
        )
    }
}

export default Login;

