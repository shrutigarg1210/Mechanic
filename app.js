const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

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
  } = req.body();

  try {
    const user = await collection.findOne({ email: email });

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
    const user = await collection.findOne({ email: email });
    console.log(user);

    if(user){
      return res.status(409).json({ message: "User already exists with the given email" });
    }
    else{
      console.log("Ty");
        let us =  await collection.insertMany(req.body);
        console.log(us);
        const n = await us.save()
        return res.status(201).json({ message: "New user added successfully" });
    }
  } catch (e) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
