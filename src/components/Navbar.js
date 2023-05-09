import React from "react";
import {
  Link,
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
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
                <Link style={{ color: 'Black',textDecoration: 'none' }} to={"/RegistrationForm "}>User</Link>
                  
                </li>

                <Link style={{color: 'Black',textDecoration: 'none' }} to={"/Mechanicform "}>Mechanic</Link>
              </ul>
            </li>
          </ul>

          <button className="m-login" type="submit">
            Mechanic Login
          </button>

          <button className="u-login" type="submit">
            User Login
          </button>

          {/* </form> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
