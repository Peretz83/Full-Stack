const express = require('express')
const router = express.Router()
const crypto = require("../helper/crypto_helper")
const jwt = require("jsonwebtoken")
const authUserModel = require('../models/authUserModel')
const authUserModelJOI = require('../models/authUserModelJOI')


/*
* POST http://localhost:3007/api/auth/register
*/
router.post("/register", async (request, response) => {
    try {
        const userModel = new authUserModelJOI(request.body);
        const errors = userModel.validateRegistration();
        if (errors)
        return response.status(400).send(errors);

        userModel.password = crypto.hash(userModel.password)

        const user = new authUserModel(userModel)
        await user.save()

        // userModel.token = "LeeIsTheMan";
        userModel.token = jwt.sign({user},"SuchAPerfectDay",{expiresIn:"5m"})

        delete userModel.password

        response.status(201).json(userModel)
    } catch(err) {
        response.status(500).send(err.message);
    }
});




module.exports = router