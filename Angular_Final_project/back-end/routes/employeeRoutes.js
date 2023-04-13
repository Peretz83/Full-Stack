const express = require('express');
const router = express.Router();
const validator = require('validator');
const joi = require('joi');
const Employee = require('./../models/employeeModel')

/*
* GET http://localhost:3001/api/employees/search/:searchTerm
*/
router.get("/search/:searchTerm", async (req, res)=>{
  const searchRegex = new RegExp(req.params.searchTerm, 'i');
  const employee = await Employee.find({name: {$regex:searchRegex}})

  res.status(200).json(employee)
})


/*
* GET http://localhost:3001/api/employees
*/
router.get('/', async (req, res)=>{
 try {
            const result = await Employee.find({});
            res.json(result);
        }
        catch (err) {
            console.log(err);
            res.status(400).json({ error: 'error getting customers' });
        }

    })

/*
* POST http://localhost:3001/api/employees
*/
router.post('/', async (req, res)=>{
 try {
            const schema = joi.object({
                name: joi.string().min(2).max(100).required(),
                email: joi.string().required().email(),
                phone: joi.string().max(12).min(10).required(),
                bDay: joi.string().min(2).max(100).required()
            });

            const { error, value } = schema.validate(req.body);

            if (error) {
                console.log(error.details[0].message);
                throw 'error adding employee';
            }

            const employee = new Employee(value);
            const newEmployee = await employee.save();
            res.json(newEmployee);
        }
        catch (err) {
            console.log(err.message);
            res.status(400).json({ error: `error adding employee` });
        }
      })

/*
* DELETE http://localhost:3001/api/employees/31322323232
*/
router.delete('/:id', async (req, res)=>{
      try {
            const schema = joi.object({
                id: joi.string().required(),
            });

            const { error, value } = schema.validate(req.params);

            if (error) {
                console.log(error.details[0].message);
                throw `error deleting employee`;
            }

            const deleted = await Employee.findOneAndRemove({
                _id: value.id
            });

            if (!deleted) throw "failed to delete";
            res.json(deleted);
        }
        catch (err) {
            console.log(err.message);
            res.status(400).json({ error: `error delete project` });
        }
    })

module.exports = router;