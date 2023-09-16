const express = require("express");
const bcrypt = require('bcrypt');
const app = express();
const userModal = require("../Modal/UserModal");

app.post("/login",async(request,response)=>{
try{
    const {email,password} = request.body;
    const fetchUser = await userModal.find({email})
    bcrypt.compare(password, fetchUser[0].password, (err, result) => {
        if (err) {
          console.error('Error comparing passwords:', err);
          return response.send("Login failed")
        }
        if (result) {
          console.log('Password is correct');
          response.send("Login successfull")
        } else {
          console.log('Password is incorrect');
          response.send("Login failed")
        }
      });
}
catch (error){
    console.log("Error occured in login");
    response.send("Error occured in loging")
}
})

app.get("/all", async (request, response) => {
    try {
       userModal.aggregate([
        {
          $lookup: {
            from: 'roles',
            localField: 'role',
            foreignField: '_id',
            as: 'userRole',
          },
        },
        {
          $unwind: '$userRole',
        },
        {
          $project: {
            _id: 1,
            name: 1,
            email: 1,
            password: 1,
            mobile: 1,
            role: '$userRole.role',
          },
        }
          ]).exec().then(resp=>response.send(resp)).catch(err=>response.send(err))
    }
    catch (error) {
        console.log("Error Occured in User API")
        response.send("Error Ocurred")
    }
})

app.post("/new", async (request, response) => {
    try {
        const { name, email, password, mobile, role } = request.body
        const saltRounds = 10;
        bcrypt.genSalt(saltRounds, async (err, salt) => {
            if (err) {
                console.error('Error generating salt:', err);
                return response.send("Error occured while creating the user")
            }
            bcrypt.hash(password, salt, async (err, hash) => {
                if (err) {
                    console.error('Error hashing password:', err);
                    return;
                }
                const newUser = new userModal(
                    {
                        name,
                        email,
                        password: hash,
                        mobile,
                        role
                    });
                const savedUser = await newUser.save();
                response.send("User created successfully")
            });
        });
    }
    catch (error) {
        console.log("Error Ocurred in the post API user" ,error)
        response.send("Error Occured in posting user")
    }
})

module.exports = app;