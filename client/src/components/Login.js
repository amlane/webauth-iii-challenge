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
              <form>
              <p>Login</p>
              </form>
            </header>
        )
    }
}

export default Login;

