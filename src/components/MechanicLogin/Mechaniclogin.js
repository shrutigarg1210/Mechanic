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
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // async function submit(e) {
    //   e.preventDefault();

    //   try {
    //     let res = await axios
    //       .post(
    //         "http://localhost:8000/Mechaniclogin",
    //         {
    //           email,
    //           password,
    //         }
    //       )
    //       .then((res) => {
    //         if ((res.data = "exist")) {
    //           navigate("/");
    //         } else if ((res.data = "not exist")) {
    //           alert("User Not Found🙁");
    //         }
    //       })

    //       .catch((e) => {
    //         alert("Wrong Details");
    //         console.log(e);
    //       });
    //   } catch (e) {
    //     console.log(e);
    //   }
    // }

  return (
    // <center>
    <div>
<Navbar/>
   
    <div id="login">
      <form>
      <center><h3>LOGIN</h3></center>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <center>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </center>

          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <center>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </center>
      </form>
      <center>
        <p>OR</p>
        <Link to="../Mechanicform">SignUp Page😍</Link>
      </center>
    </div>
    </div>
    //  </center>
  );
};

export default Mechaniclogin;
