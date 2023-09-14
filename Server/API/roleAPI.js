const express = require("express");
const app = express();
const roleModal = require("../Modal/RoleModal");

app.get("/", async (request, response) => {
    try {
        const fetchRoles = await roleModal.find({})
        response.send(fetchRoles);
    }
    catch (error) {
        console.log("Error Occured in User API")
        response.send("Error Ocurred")
    }
})

app.post("/new", async (request, response) => {
    try {
        const { role } = request.body;
        const newRole = new roleModal(
            {
                role
            });
        const savedUser = await newRole.save();
        response.send("Role created successfully")
    } catch (error) {
        response.status(500).send(error);
    }
})


module.exports = app;