const { type } = require("@testing-library/user-event/dist/type");
const mongoose = require("mongoose");

const collectionSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
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
  
  });
  
  const Collection = mongoose.model("Collection", collectionSchema);
  
  module.exports = Collection;