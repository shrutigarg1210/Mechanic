const { type } = require("@testing-library/user-event/dist/type");
const mongoose = require("mongoose");

const userloginSchema = new mongoose.Schema({
   
  email:{
    type: String,
    required: true,
    unique:true,
  },
  password:{
    type: String,
    required: true,
  },
  latitude:{
    type: Number,
  },
  longitude:{
    type: Number,
  },
})

const userlogin = mongoose.model("userlogin",userloginSchema);

module.exports = userlogin;