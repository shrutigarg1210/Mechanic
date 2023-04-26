import React, { useState, setState } from "react";
import axios from "axios";
import "./Mechanicform.css";
import Navbar from "../Navbar";
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

    // const onChange = () => {
    //   setChecked(!checked);
    // };
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

  async function submit(e) {
    e.preventDefault();

    try {
      await axios.post(
        "mongodb+srv://shrutigarg749:<KAjBfuhHJQLv4Eei>@mechanicform.zrwveqq.mongodb.net/test",
        {
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
        }
      );
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="form">
      <form action="POST">
        <div className="form-body">
          <table>
          <tr className="firstname input-box">
            <td>
              <label className="form_label" for="firstName">
                FirstName
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
            
          </tr>

          
          <tr className="lastname input-box">
              
            <td>
              <label className="form_label" for="lastName">
                LastName
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
          </tr>
         
          <tr className="confirm-password input-box">
            <td>
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
          
          <tr className="phoneNumber input-box">
            
            <td>
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
          
          </tr>
         
          <tr className="district input-box">
           
           <td>
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
         

          <tr className="state input-box">
            
            <td>
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
        
        {/* <tr className="input-box">
          <td>
          <input type="checkbox"> Truck</input>
          </td>
          <td>
          <input type="checkbox"> Car</input>
          </td>
        </tr> */}
       
       <tr className="vehicle">
            
            {/* <td> */}
            <input type="checkbox" /> Truck
            {/* </td> */}
            
            {/* <td> */}
            <input type="checkbox" /> Car
            {/* </td> */}

            {/* <td> */}
            <input type="checkbox" /> Bike
            
            {/* </td> */}

            
          </tr>

          {/* <tr>
            <input type="checkbox" />
          </tr> */}
         

          </table>
          </div>
        <div class="footer">
          <button onClick={() => handleSubmit()} type="submit" class="btn">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Mechanicform;
