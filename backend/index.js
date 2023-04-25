const express = require('express');

const app = express();
const mongoose = require('mongoose');
const cors = require("cors")
const bodyParser = require("body-parser");
const PORT = 4000;


// var urlencodedParser = bodyParser.urlencoded({ extended: false })
// app.use(bodyParser.json())
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb+srv://shrutigarg749:<BFkmjX5yAojiBpc6>@mechanicform.zrwveqq.mongodb.net/test",{ useNewUrlParser: true })
mongoose.connection.on("connected",() =>{
    console.log("Database Connected");
})

mongoose.connection.on("Error",() =>{
    console.log("Database Not Connected");
})

// app.get("/",(req,res)=>{
//     res.send("Hello World");
// })

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.json())
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://0.0.0.0:27017/todo")
mongoose.connection.on("connected",() =>{
    console.log("Database Connected");
})

mongoose.connection.on("Error",() =>{
    console.log("Database Not Connected");
})
