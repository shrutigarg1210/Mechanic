const { type } = require("@testing-library/user-event/dist/type");
const mongoose = require("mongoose");

// "mongodb+srv://shrutigarg9973:938OtZ2264YlOJhT@form.lhujlsi.mongodb.net/register"
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
});

const Collection = mongoose.model("Collection", collectionSchema);

module.exports = Collection;
