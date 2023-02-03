const express = require('express')
const Router = express.Router()
const authUserModel = require('../models/authUserModel')
const authUserModelJOI = require('../models/authUserModelJOI')

/*
* POST http://localhost:3003/api/auth/register
*/
Router.post("/register", async (request, response) => {
    try {
        const userModel = new authUserModelJOI(request.body);
        const errors = userModel.validateRegistration();
        if (errors)
        return response.status(400).send(errors);
        const user = new authUserModel(userModel)
        await user.save()
        response.status(200).json(user)
    } catch(err) {
        response.status(500).send(err.message);
    }
});



module.exports = Router