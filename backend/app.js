const express = require("express");
const Collection = require("./model");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

mongoose
  .connect(
    "mongodb+srv://shrutigarg9973:938OtZ2264YlOJhT@form.lhujlsi.mongodb.net/register"
  )//
  .then(() => {
    console.log("mongoDb Connected");
  })
  .catch((error) => {
    console.log(error);
    console.log("mongoDb Connection Failed");
  });
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

  const data = {
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
  };

  try {
    const user = await Collection.findOne({ email: email });
    // console.log(user);

    if(user){
      return res.status(409).json({ message: "User already exists with the given email" });
    }
    else{
      // console.log("Ty");
        // const us =  await Collection.create({...req.body});
        try{
          var oneCollection = new Collection({...req.body});
          oneCollection = await oneCollection.save();
          console.log("Collection created");
        }
        catch(e){
          console.log(e);
        }
        // console.log(req.body)
        // const n = await us.save()
        return res.status(201).json({ message: "new user added", newUser: oneCollection });
    }
  } catch (e) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
