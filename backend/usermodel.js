const { type } = require("@testing-library/user-event/dist/type");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword:{
    type: String,
    required: true,
  },
  latitude:{
    type: Number,
  },
  longitude:{
    type: Number,
  },
  token: 
  { 
    type: String
 },
});

const user = mongoose.model("userSchema", userSchema);

module.exports = user;
