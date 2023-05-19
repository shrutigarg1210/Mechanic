import React, { useState } from "react";
import axios from "axios";
import "./user.css";
// //Axios is a powerful and flexible library that simplifies
// // the process of making HTTP requests in JavaScript applications.
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../Navbar";
const Userlogin = () => {
  const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleInputChange = (e) =>{

      const {id,value} = e.target;

      if(id === "email"){
        setEmail(value);
      }

      if(id === "password"){
        setPassword(value);
      }
    };

    async function submit(e){
      e.preventDefault()
      try{

        let res = await axios.post("http://localhost:8000/Userlogin",{
          email,
          password,
        });

       if(res.data.message === "Login Successful" ){
        console.log("Working");
        navigate("/");
       }
       else{
        console.log("Not Working");
          alert("Invalid Username or Password")
       }
      }

      catch(e){
        console.log(e);
      }
}

  return (
    // <center>
    <div>
      <Navbar/>
      <div id="login">
      <center>
          <h3>LOGIN</h3>
        </center>
        <form>
          <div class="mb-3">
            <label for="email" class="form-label">
              Email 
            </label>
            <center>
            <input
            placeholder="E-mail"
              type="email"
              class="form-control"
              id="email"
              value={email}
              onChange={(e) =>{handleInputChange(e)}}
              // aria-describedby="emailHelp"
            />
            </center>
          
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">
              Password
            </label>
            <input
            placeholder="Password"
              type="password"
              class="form-control"
              id="password"
              value={password}
              onChange={(e) =>{handleInputChange(e)}}
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
        <Link to="../RegistrationForm">SignUp Page😍</Link>
        </center>
      </div>
      </div>
    //  </center> 


  );
};

export default Userlogin;
