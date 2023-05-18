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
 
});

const login = mongoose.model("login", loginSchema);

module.exports = login;

// token: 
// { 
//   type: String
// },