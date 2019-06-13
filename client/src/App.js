import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="main-nav">
          <NavLink exact to="/">Home</NavLink>{' '}
          <NavLink to="/login">Login</NavLink>{' '}
          <NavLink to="/users">Users</NavLink>{' '}
        </nav>
      </header>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
