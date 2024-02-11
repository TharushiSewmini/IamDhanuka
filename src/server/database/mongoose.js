const mongoose = require("mongoose")


const mongoUrl = "mongodb+srv://tharushi:dhanuka12345@cluster0.x793wak.mongodb.net/mydb?retryWrites=true&w=majority";

mongoose.connect(mongoUrl , {
    useNewUrlParser : true,
    useUnifiedTopology : true
})
const connection = mongoose.connection;

connection.once("open" , ()=>{
    console.log("Mongo DB connected")
})

