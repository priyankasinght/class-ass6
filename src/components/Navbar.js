import React from 'react';
import './Navbar.css';
import logo from '../logo/logo.png'

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src={logo} alt="loading" />
        </div>

        <ul className="nav-link-left">
          <li> <a className="nav-left" href=" ">Platforms</a></li>
          <li><a className="nav-left" href=" ">Plan</a></li>
          <li><a className="nav-left" href=" ">Enterprise</a></li>
          <li><a className="nav-left" href=" ">Resources</a></li>
          <li><a className="nav-left" href=" ">Education</a></li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul className="nav-link-right">
          <li><a className="nav-right" href=" ">Contact Us</a></li>
          <li><a className="nav-right" href=" ">Login</a></li>
          <li> <button className="signup-btn">Signup</button> </li>
        </ul>

      </div>

    </div>

  );
}

export default Navbar;
