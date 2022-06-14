const express= require("express");
const app= express();
const dotenv=require("dotenv");
const morgan=require("morgan");
const bodyparser= require("body-parser");
const path=require("path");


dotenv.config({path:'config.env'})
const port= process.env.port ||8080;


const connectDB= require("./server/database/connection")

//log requests
app.use(morgan('tiny'));

//Connect MongoDB
connectDB();

//Parse request to body-parser
app.use(bodyparser.urlencoded({extended: true}));


//Set view Engine
app.set("view engine", "ejs");
app.set("/views", path.resolve(__dirname, "views"));

//load Assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

//Load Routes
app.use("/", require("./server/routes/router"));

app.listen(port, ()=>{
    console.log(`Server is successfully running at ${port}`);
})


