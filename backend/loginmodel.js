const { type } = require("@testing-library/user-event/dist/type");
const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
 
  email: {
    type: String,
    required: true,
    unique:true,
  },
  password: {
    type: String,
    required: true,
  },
  
  token: 
  { 
    type: String
 },
});

const login = mongoose.model("loginSchema", loginSchema);

module.exports = login;
