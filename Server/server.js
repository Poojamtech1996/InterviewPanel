const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config()

let app = express();
const port = process.env.PORT || 8080;
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(cors());

let technology = require("./API/TechnologyAPI");
let user = require("./API/userAPI");
let role = require("./API/roleAPI");
let questions = require("./API/questionAPI");

app.use("/technology", technology);
app.use("/user",user);
app.use("/role",role);
app.use("/question",questions);

mongoose.connect(process.env.URL).then((res) => {
    console.log('Database connected successfully');
}).catch((error) => {
    console.log("Error occured while connecting");
})

app.listen(port,()=>{
console.log("Server running on port no :- ", port);
});