const { type } = require("@testing-library/user-event/dist/type");
const mongoose = require("mongoose");
// mongoose.connect("mongodb+srv://shrutigarg749:BFkmjX5yAojiBpc6@mechanicform.zrwveqq.mongodb.net/mechanicform")
mongoose
  .connect(
    "mongodb+srv://shrutigarg749:BFkmjX5yAojiBpc6@mechanicform.zrwveqq.mongodb.net/test"
  )
  .then(() => {
    console.log("mongoDb Connected");
  })
  .catch((error) => {
    console.log(error);
    console.log("mongoDb Connection Failed");
  });

const collectionSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  confirmpassword: {
    type: String,
    required: true,
  },

  phoneNumber: {
    type: String,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  district: {
    type: String,
    required: true,
  },

  state: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model("collection", collectionSchema);

module.exports = collection;
