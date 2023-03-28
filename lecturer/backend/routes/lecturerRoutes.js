const express = require('express');
const router = express.Router();
const Lecturer = require('../models/lecturerModel');

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



module.exports = router;