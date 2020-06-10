import React from 'react';
import { Link } from "react-router-dom";
import logo from './logo.svg';
import { IHeader } from '../../types/IHeader';
import './Header.css';
/**
 * @param headerText  Prop for 'header Text'.
 * @param addPostText  Prop for 'add post button text'.
 * @param listPostText  Prop for 'List view button text'.
 */

const Header = ({headerText,addPostText,listPostText}: IHeader) =>(
    <header className="App-header">
      <div className="logo"> 
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{headerText}</h1>
      </div>
      <div>
          <Link to="/">
              <button>{addPostText}</button>
          </Link>
          <Link to="/list">
              <button>{listPostText}</button>
          </Link>
      </div>
  </header>
);

export default Header;