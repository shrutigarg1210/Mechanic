const express = require("express");
const Collection = require("./mechanicmodel");
const user = require("./usermodel");
const login = require("./loginmodel");
const userlogin = require("./userloginmodel")
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const secretKey =
  "e7062355b870488c9ddc3ca783ab8710be261a10e3976a1e61a02377fbbaec83";
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const axios = require("axios");

mongoose
  .connect(
    "mongodb+srv://shrutigarg9973:938OtZ2264YlOJhT@form.lhujlsi.mongodb.net/register"
  ) //
  .then(() => {
    console.log("mongoDb Connected");
  })
  .catch((error) => {
    console.log(error);
    console.log("mongoDb Connection Failed");
  });

// for mongodb Compass
// mongoose
//   .connect(
//     "mongodb://0.0.0.0:27017/mechanic"
//   )//
//   .then(() => {
//     console.log("mongoDb Connected");
//   })
//   .catch((error) => {
//     console.log(error);
//     console.log("mongoDb Connection Failed");
//   });

app.get("/", (req, res) => {
  return res.json({ status: "success" });
});

app.post("/Mechanicform", async (req, res) => {
  console.log(req.body);
  const {
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
  } = req.body;

  const API_KEY = "u8NByuB56ERnwEMvOATljl6Ud7GIeTMA";
  const URL = `http://www.mapquestapi.com/geocoding/v1/address?key=${API_KEY}&location=${address},${city},${state}`;

  try {
    const user = await Collection.findOne({ email: email });

    if (user) {
      console.log("User found");
      return res.json({ message: "user exists" });
    } else {
      try {
        const response = await axios.get(URL);
        const { lat, lng } = response.data.results[0].locations[0].latLng;

        // var oneCollection = new Collection({...req.body});
        const mechanicPassword = req.body.password;

        // encrypt the mechanic's password using bcrypt
        const encryptedMechanicPassword = await bcrypt.hash(
          mechanicPassword,
          saltRounds
        );

        var oneCollection = new Collection({
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: encryptedMechanicPassword,
          confirmPassword: encryptedMechanicPassword,
          phoneNumber: phoneNumber,
          city: city,
          address: address,
          district: district,
          state: state,
          latitude: lat, // Add the latitude to the database
          longitude: lng, //Add the longitude to the database
        });

        // Create token
        const token = jwt.sign(email, secretKey);

        // save user token
        oneCollection.token = token;

        oneCollection = await oneCollection.save();
        console.log("Collection created");
      } catch (e) {
        console.log(e);
      }

      return res.json({ message: "new user added", newUser: oneCollection });
    }
  } catch (e) {
    return res.json({ message: "Internal server error" });
  }
});

// app.get("/Mechaniclogin", (req, res) => {
//   res.render("Mechaniclogin");
// });

app.post("/Mechaniclogin", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    console.log(`${email} and password ${password}`);

    const mechanic = await Collection.findOne({email:email});

    const isMatch = await bcrypt.compare(password,mechanic.password);

    if(isMatch){
      
      return res.json({message: "Login Successful"});
      console.log("Success");
    }

    else{
      console.log("failed");
      return res.json({message: "Invalid Username or Password"});
    }
    
  } catch (error) {
    return res.json({ message: "Internal server error" });
  }
});

app.post("/RegistrationForm", async (req, res) => {
  console.log(req.body);
  const {
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
    confirmPassword,
    latitude,
    longitude,
  } = req.body;

  const userPassword = req.body.password;

  // encrypt the user's password using bcrypt
  const encrypteduserPassword = await bcrypt.hash(userPassword, saltRounds);

  var newUser = new user({
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email,
    password: encrypteduserPassword,
    confirmPassword: encrypteduserPassword,
    latitude: latitude,
    longitude: longitude,
  });
  // Create token
  const token = jwt.sign(email, secretKey);

  // save user token
  newUser.token = token;
  try {
    newUser = await newUser.save();
    console.log("User created");
    return res.json({ message: "new user added", newUser: newUser });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal server error" });
  }
});


app.post("/Userlogin", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    console.log(`${email} and password ${password}`);

    const customer = await user.findOne({email:email});

    const isMatch = await bcrypt.compare(password,customer.password);

    if(isMatch){
      
      return res.json({message: "Login Successful"});
      console.log("Success");
    }

    else{
      console.log("failed");
      return res.json({message: "Invalid Username or Password"});
    }
    
  } catch (error) {
    return res.json({ message: "Internal server error" });
  }
});

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
