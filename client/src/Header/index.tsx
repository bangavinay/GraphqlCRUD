import React from 'react';
import { Link } from "react-router-dom";
import logo from './logo.svg';

const Header = () =>(
    <header className="App-header">
    <div className="logo"> 
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to Post App</h1>
    </div>
    <div>
        <Link to="/">
            <button>Home</button>
        </Link>
        <Link to="/list">
            <button>List</button>
        </Link>
    </div>
  </header>
);

export default Header;