const { type } = require("@testing-library/user-event/dist/type");
const mongoose = require("mongoose");

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

  confirmPassword: {
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

  latitude: {
    type: Number,
  },

  longitude: {
    type: Number,
  },

  token: {
    type: String,
  },
});

const Collection = mongoose.model("Collection", collectionSchema);

module.exports = Collection;
