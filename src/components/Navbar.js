import React from "react";
import { Link, BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
   
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            OnTheGoMechanic
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse ml-5"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to={"/home"}
                  className="nav-link active"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/about"} className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/Services"} className="nav-link">
                  Services
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Registration Form
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      User
                    </a>
                  </li>

                  <Link to={"/Mechanicform "}>Mechanic</Link>

                  {/* <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li> */}
                </ul>
              </li>
              {/* <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
  
  );
};

export default Navbar;
