import React, { useState } from "react";
import axios from "axios";
import "./mechanic.css";
// //Axios is a powerful and flexible library that simplifies
// // the process of making HTTP requests in JavaScript applications.
import { useNavigate, Link } from "react-router-dom";
// import { Navbar } from "react-bootstrap";
import Navbar from "../Navbar";
const Mechaniclogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "email") {
      setEmail(value);
    }

    if (id === "password") {
      setPassword(value);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("Hello")
    try {
      let res = await axios.post("http://localhost:8000/Mechaniclogin", {
        email,
        password,
      });

      if (res.data.message === "Login Successful") {
        console.log("Working");
        navigate("/");
      } else {
        console.log("Not Working");
        alert("Invalid Username or Password");
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    // <center>
    <div className="mechanicl">
      <Navbar />

      <div id="login">
        <center>
          <h3>LOGIN</h3>
        </center>
        <form onSubmit={handleSubmit} >
          <div className="mb-3">
            <label for="email" className="form-label">
              Email
            </label>
            <center>
              <input
                placeholder="E-mail"
                type="email"
                className="form-control"
                id="email"
                value={email}
                required
                onChange={(e) => handleInputChange(e)}
                // aria-describedby="emailHelp"
              />
            </center>

            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="password" className="form-label">
              Password
            </label>
            <input
             placeholder="Password"
              type="password"
              className="form-control"
              id="password"
              value={password}
              required
              onChange={(e) => handleInputChange(e)}
              
            />
          </div>
          <center>
            <input type="submit" className="btn btn-primary"
              value={"Submit"}
            />
            
          </center>
        </form>
        <center>
          <p>OR</p>
          <Link  style={{ color: "rgb(199 21 144)", textDecoration: "none" }}
           to="../Mechanicform">
            SignUp Page😍
            </Link>
        </center>
      </div>
    </div>
    //  </center>
  );
};

export default Mechaniclogin;
