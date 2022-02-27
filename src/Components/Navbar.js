import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="container-fluid navbar__block navbar-light">
        <div className="container inner__navbar__block">
          <nav className="navbar navbar-expand-lg ">
          <Link className="navbar-brand " to="/"></Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item ">
                  <Link  className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link  className="nav-link" to="/aboutus">
                  About 
                  </Link>
                </li>
                <li className="nav-item">
                  <Link  className="nav-link" to="/products">
                  Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link  className="nav-link" to="/services">
                  Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link  className="nav-link" to="/application">
                  Application
                  </Link>
                </li>
                <li className="nav-item">
                  <Link  className="nav-link" to="/career">
                  Career
                  </Link>
                </li>
                <li className="nav-item">
                  <Link  className="nav-link" to="/contact">
                  Contact Us
                  </Link>
                </li>
                
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
