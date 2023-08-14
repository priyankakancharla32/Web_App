import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <h1>
          <Link to="/">E-Learning Platform</Link>
        </h1>
      </div>
      <nav className="header-nav">
        <ul>
          <li>
            <Link to="/">Courses</Link>
          </li>
          <li>
            <Link to="/signup" className="signup-link">
              Sign Up
            </Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
