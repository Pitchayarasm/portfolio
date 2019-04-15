import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top" style={{backgroundColor:"rgb(49,49,49)"}}>
        <div className="container">
          <div>
          <i className="fas fa-code" style={{color:"rgb(242,242,242)"}}></i>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item mr-auto">
              <Link
                to="/"
                style={{color:"rgb(242,242,242)"}}
                className={"nav-link mr-3"}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                style={{color:"rgb(242,242,242)"}}
                className={"nav-link mr-3"}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/apps"
                style={{color:"rgb(242,242,242)"}}
                className={"nav-link mr-3"}
              >
                Apps
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Contact"
                style={{color:"rgb(242,242,242)"}}
                className={"nav-link mr-3"}
              >
                Contact
              </Link>
            </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )};

export default Nav;