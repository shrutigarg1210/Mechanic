import React, { useState, setState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import useGeolocation from "react-hook-geolocation";
import Navbar from "../Navbar";
const Registrationform = () => {
  const navigate = useNavigate();
  const [firstName, setfirstname] = useState("");
  const [lastName, setlastname] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const geolocation = useGeolocation();
  const latitude = geolocation.latitude;
  const longitude = geolocation.longitude;
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setfirstname(value);
    }

    if (id === "lastName") {
      setlastname(value);
    }

    if (id === "email") {
      setEmail(value);
    }
    if (id === "phoneNumber") {
      setPhone(value);
    }

    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    if (password === confirmPassword) {
      let res = axios
        .post("http://localhost:8000/RegistrationForm", {
          firstName,
          lastName,
          phoneNumber,
          email,
          password,
          confirmPassword,
          latitude,
          longitude,
        })
        .then(() => {
          if (res.data.message === "new user added") {
            navigate("/home");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("Password does not match");
    }
  };

  return (
    <center>
      {" "}
      <div className="form">
        <form onSubmit={handleSubmit} action="/home">
          <h3>User Registration Form</h3>
          <div className="form-body">
            <table>
              <tr className="firstName input-box">
                <td>
                  <label className="form_label" for="firstName">
                    FirstName
                  </label>
                </td>

                <td>
                  <input
                    className="form_input"
                    type="text"
                    value={firstName}
                    required
                    onChange={(e) => handleInputChange(e)}
                    id="firstName"
                    placeholder="First Name"
                  />
                </td>
                <td className="lastname input-box">
                  <label className="form_label" for="lastName">
                    LastName
                  </label>
                </td>

                <td>
                  <input
                    className="form_input"
                    type="text"
                    value={lastName}
                    required
                    onChange={(e) => handleInputChange(e)}
                    id="lastName"
                    placeholder="Last Name"
                  />
                </td>
              </tr>

              <tr className="email input-box">
                <td className="phoneNumber input-box">
                  <label className="form_label" for="phoneNumber">
                    Phone Number
                  </label>
                </td>

                <td>
                  <input
                    className="form_input"
                    type="String"
                    id="phoneNumber"
                    required
                    maxLength={10}
                    pattern="[1-9]{1}[0-9]{9}"
                    placeholder="9876543210"
                    value={phoneNumber}
                    onChange={(e) => handleInputChange(e)}
                  />
                </td>
                <td>
                  <label className="form_label" for="email">
                    Email
                  </label>
                </td>

                <td>
                  <input
                    className="form_input"
                    type="email"
                    id="email"
                    required
                    placeholder="abc@gmail.com"
                    value={email}
                    onChange={(e) => handleInputChange(e)}
                  />
                </td>
              </tr>
              <tr className="password input-box">
                <td>
                  <label className="form_label" for="password">
                    Password
                  </label>
                </td>

                <td>
                  <input
                    className="form_input"
                    type="password"
                    id="password"
                    required
                    placeholder="password"
                    value={password}
                    onChange={(e) => handleInputChange(e)}
                  />
                </td>

                <td className="confirm-password input-box">
                  <label className="form_label" for="confirmPassword">
                    Confirm Password
                  </label>
                </td>

                <td>
                  <input
                    className="form_input"
                    type="password"
                    id="confirmPassword"
                    required
                    placeholder="password"
                    value={confirmPassword}
                    onChange={(e) => handleInputChange(e)}
                  />
                </td>
              </tr>
            </table>
            <div className="footer">
              <button onClick={() => handleSubmit()} type="submit" class="btn">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </center>
  );
};

export default Registrationform;
