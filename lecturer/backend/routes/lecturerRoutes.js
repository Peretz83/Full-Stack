const express = require('express');
const router = express.Router();
const joi = require('joi');
const {Lecturer} = require('../models/lecturerModel');

/*
* GET http://localhost:3000/api/lecturers
*/
router.get('/', async (req, res)=>{
  try {
    const allLecturers = await Lecturer.find({});

    res.status(200).json({
      status: 'Success',
      results: allLecturers.length,
      data: allLecturers
    });
  } catch (err) {
    res.status(404).json({
      status: 'Fail',
      message: err.message
    });
  }
})

/*
* POST http://localhost:3000/api/lecturers
*/
router.post('/', async (req, res)=>{
 try {
            const schema = joi.object({
                fName: joi.string().min(2).max(100).required(),
                lName: joi.string().min(2).max(100).required(),
                email: joi.string().unique().max(150).required,
                phone: joi.string().max(250).min(6).required(),
                start_date: joi.string().required()
            });

            const { error, value } = schema.validate(req.body);

            if (error) {
                console.log(error.details[0].message);
                throw 'error add lecturer';
            }

            const lecturer = new Lecturer(value);
            const newLecturer = await lecturer.save();
            res.json(newLecturer);
        }
        catch (err) {
            console.log(err.message);
            res.status(400).json({ error: `error adding lecturer` });
        }
      })




module.exports = router;