import React, { useState, setState } from "react";
import "../components/Mechanicform.css";
import Navbar from "../components/Navbar";
const Mechanicform = () => {
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
    console.log(
      firstname,
      lastname,
      email,
      password,
      confirmPassword,
      phoneNumber,
      city,
      address,
      district,
      state
    );
  };
  return (
    <div className="form">
     
      <div className="form-body">
       
        <div className="firstname">
         
          <label className="form_label" for="firstName">
            FirstName
          </label>
          
          <input
            className="form_input"
            type="text"
            value={firstname}
            required
            onChange={(e) => handleInputChange(e)}
            id="firstName"
            placeholder="First Name"
          />
        </div>

        <br/>
        <div className="lastname">
          <label className="form_label" for="lastName">
            LastName
          </label>
          <input
            className="form_input"
            type="text"
            value={lastname}
            required
            onChange={(e) => handleInputChange(e)}
            id="lastName"
            placeholder="Last Name"
          />
        </div>
        <br/>
        <div className="email">
          <label className="form_label" for="email">
            Email
          </label>
          <input
            className="form_input"
            type="email"
            id="email"
            required
            placeholder="abc@gmail.com"
            value={email}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <br/>
        <div className="password">
          <label className="form_label" for="password">
            Password
          </label>
          <input
            className="form_input"
            type="password"
            id="password"
            required
            placeholder="password"
            value={password}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <br/>
        <div className="confirm-password">
          <label className="form_label" for="confirmPassword">
            Confirm Password
          </label>
          <input
            className="form_input"
            type="password"
            id="confirmPassword"
            required
            placeholder="password"
            value={confirmPassword}
            onChange={(e) => handleInputChange(e)}
          />
        </div><br/>

        <div className="phoneNumber">
          <label className="form_label" for="phoneNumber">
            Phone Number
          </label>
          <input
            className="form_input"
            type="Number"
            id="phoneNumber"
            required
            placeholder="9876543210"
            value={phoneNumber}
            onChange={(e) => handleInputChange(e)}
          />
        </div><br/>

        <div className="address">
          <label className="form_label" for="address">
            Address
          </label>
          <input
            className="form_input"
            type="address"
            id="address"
            required
            placeholder="address"
            value={address}
            onChange={(e) => handleInputChange(e)}
          />
        </div><br/>

        <div className="city">
          <label className="form_label" for="city">
            City
          </label>
          <input
            className="form_input"
            type="text"
            id="city"
            required
            placeholder="city"
            value={city}
            onChange={(e) => handleInputChange(e)}
          />
        </div><br/>

        <div className="district">
          <label className="form_label" for="district">
            District
          </label>
          <input
            className="form_input"
            type="district"
            id="district"
            required
            placeholder="district"
            value={district}
            onChange={(e) => handleInputChange(e)}
          />
        </div><br/>

        <div className="state">
          <label className="form_label" for="state">
            State
          </label>
          <input
            className="form_input"
            type="text"
            id="state"
            required
            placeholder="state"
            value={state}
            onChange={(e) => handleInputChange(e)}
          />
        </div><br/>
      </div>

      <div class="footer">
        <button onClick={() => handleSubmit()} type="submit" class="btn">
          Register
        </button>
      </div>
  
    </div>
  );
};

export default Mechanicform;
