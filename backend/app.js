const express = require("express");
const Collection = require("./mechanicmodel");
const user = require("./usermodel");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
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

app.post("/Mechaniclogin", async (req, res) => {
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

  try {
    const user = await Collection.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      res.json("not exist");
    }
  } catch (e) {
    res.json("not exist");
  }
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

  // const data = {
  // firstname: firstname,
  // lastname: lastname,
  // email: email,
  // password: password,
  // confirmPassword: confirmPassword,
  // phoneNumber: phoneNumber,
  // city: city,
  // address: address,
  // district: district,
  // state: state,
  // latitude: latitude, // Add the latitude to the database
  // longitude: longitude, // Add the longitude to the database
  // };

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
        var oneCollection = new Collection({
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
          confirmPassword: confirmPassword,
          phoneNumber: phoneNumber,
          city: city,
          address: address,
          district: district,
          state: state,
          latitude: lat, // Add the latitude to the database
          longitude: lng, // Add the longitude to the database
        });
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

  const data = {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
    latitude: latitude,
    longitude: longitude,
  };
  var newUser = new user({ ...req.body });

  try {
    newUser = await newUser.save();
    console.log("User created");
    return res.json({ message: "new user added", newUser: newUser });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal server error" });
  }
});

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
