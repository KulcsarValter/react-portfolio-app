import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/home" className="logo">
          Kulcsár Valter
        </Link>
        <div className="nav-link">
          <ul>
            <Link to="/home">Home</Link>
            <Link to="/about" className="about">
              About
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
