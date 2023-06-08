import React, { useState, setState,useEffect } from "react";
import axios from "axios";
import "./Mechanicform.css";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../Navbar";
import './mechanic.svg'
const Mechanicform = () => {
  const navigate = useNavigate();
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setstate] = useState("");
  // const [checked, setChecked] = useState(false);

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

    if (id === "password") {
      setPassword(value);
    }

    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }

    if (id === "phoneNumber") {
      setPhone(value);
    }

    if (id === "address") {
      setAddress(value);
    }

    if (id === "city") {
      setCity(value);
    }

    if (id === "district") {
      setDistrict(value);
    }

    if (id === "state") {
      setstate(value);
    }
  };

  const handleSubmit = () => {
    if (password === confirmPassword) {
      console.log("Wrong Details");
    } else {
      console.log("Password does not match");
    }
  };

  


  async function submit(e) {
    // e.preventDefault();
    // navigate("/home");
    if (password !== confirmPassword) {
      alert("Password does not match");
    } else {
      // console.log("Trying axios");
      try {
        let res = await axios.post("http://localhost:8000/Mechanicform", {
          firstname,
          lastname,
          email,
          password,
          confirmPassword,
          phoneNumber,
          city,
          address,
          district,
          state,
        });
        // .then((res) => {
        //   console.log(res);
        if (res.data.message === "user exists") {
          alert("User Already Exist😁");
        } else if (res.data.message === "new user added") {
          navigate("/");
        }
        // return res;
      } catch (e) {
        
        console.log(e);
      }
    }
  }
  return (
    <center>
      {" "}
      <div className="Mform">
        <form action="/" onSubmit={(e) => submit(e)}>
          
          <div className="formbody">
          <h3>Mechanic Registration Form</h3> 
            <table>
              <tr className="firstname input-box">
                <td>
                  <label className="form_label" for="firstName">
                    Name
                  </label>
                </td>

                <td>
                  <input
                    className="form_input"
                    type="text"
                    value={firstname}
                    required
                    onChange={(e) => handleInputChange(e)}
                    id="firstName"
                    placeholder="First Name"
                  />
                </td>
                <td className="lastname input-box">
                  <label className="form_label" for="lastName">
                    Owner
                  </label>
                </td>

                <td>
                  <input
                    className="form_input"
                    type="text"
                    value={lastname}
                    required
                    onChange={(e) => handleInputChange(e)}
                    id="lastName"
                    placeholder="Last Name"
                  />
                </td>
              </tr>

              <tr className="email input-box">
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
                    placeholder="xxxxxxxxxx"
                    value={phoneNumber}
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
                    maxLength={8}
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
                    maxLength={8}
                    placeholder="password"
                    value={confirmPassword}
                    onChange={(e) => handleInputChange(e)}
                  />
                </td>
                {/* </div> */}
              </tr>

              <tr className="address input-box">
                <td>
                  <label className="form_label" for="address">
                    Address
                  </label>
                </td>

                <td>
                  <input
                    className="form_input"
                    type="address"
                    id="address"
                    required
                    placeholder="address"
                    value={address}
                    onChange={(e) => handleInputChange(e)}
                  />
                </td>

                <td className="state input-box">
                  <label className="form_label" for="state">
                    State
                  </label>
                </td>

                <td>
                  <input
                    className="form_input"
                    type="text"
                    id="state"
                    required
                    placeholder="state"
                    value={state}
                    onChange={(e) => handleInputChange(e)}
                  />
                </td>
              </tr>

              <tr className="city input-box">
                <td>
                  <label className="form_label" for="city">
                    City
                  </label>
                </td>

                <td>
                  <input
                    className="form_input"
                    type="text"
                    id="city"
                    required
                    placeholder="city"
                    value={city}
                    onChange={(e) => handleInputChange(e)}
                  />
                </td>

                <td className="district input-box">
                  <label className="form_label" for="district">
                    District
                  </label>
                </td>

                <td>
                  <input
                    className="form_input"
                    type="district"
                    id="district"
                    required
                    placeholder="district"
                    value={district}
                    onChange={(e) => handleInputChange(e)}
                  />
                </td>
              </tr>
{/* 
              <center>
                <tr className="vehicle">
                  <input type="checkbox" /> Truck
                  <input type="checkbox" /> Car
                  <input type="checkbox" /> Bike
                </tr>
              </center> */}
            </table>
          </div>
          <div className="footer1">
            <button type="submit" class="btn">
              Register
            </button>
          </div>
        </form>
      </div>
    </center>
  );
};

export default Mechanicform;
