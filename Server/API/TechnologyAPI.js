const express = require("express");
const app = express();
const technologyModal = require("../Modal/TechnologyModal")

app.get("/",async(request,response)=>{
    try {
        const data = await technologyModal.find({})
        response.send(data);
    } catch (error) {
        response.status(500).send(error);
    }
})

module.exports = app;