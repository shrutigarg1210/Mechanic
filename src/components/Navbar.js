import React from "react";
import "./Navbar.css";
// import "./MechanicLogin/Mechaniclogin";
import {
  Link,
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  navbar-light">
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
              <NavLink to={"/"} className="nav-link active" aria-current="page">
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
                  <Link
                    className="M-R"
                    style={{ color: "rgb(199 21 144)", textDecoration: "none" }}
                    to={"/RegistrationForm "}
                  >
                    User
                  </Link>
                </li>

                <Link
                  className="M-R"
                  style={{ color: "rgb(199 21 144)", textDecoration: "none" }}
                  to={"/Mechanicform "}
                >
                  Mechanic
                </Link>
              </ul>
            </li>
          </ul>
          <div className="login">

          <NavLink to={"/Mechaniclogin"} className="m-login">
                Mechanic Login
              </NavLink>
            {/* <link to ={"/Mechaniclogin"}> Mechanic Login */}
              {/* <button
                className="m-login"
                type="submit"
              >
                Mechanic Login
              </button> */}
            {/* </link> */}

            <button className="u-login" type="submit">
              User Login
            </button>
          </div>

          {/* </form> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
