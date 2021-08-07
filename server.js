const express = require("express");
const app = express();
const cors = require("cors");
const mongoose= require ("mongoose");

app.use(cors());
app.use(express.json());

//connect to mongoose
mongoose.connect("mongodb+srv://user:user123@cluster0.4f3ka.mongodb.net/notesDB")

//require route
app.use("/",require("./routes/noteRoute"))


app.listen(3001,function(){
    console.log("express server is running in port 3001");
})