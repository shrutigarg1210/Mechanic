const { type } = require("@testing-library/user-event/dist/type");
const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
 
    username:{
        type:String,
        required:true,
    },

    email:{
        type: String,
        required: true,
    
    },

    phoneNumber:{
        type: String,
        required: true,
    },
    
    problem:{
        type:String,
        required:true
    }
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;

