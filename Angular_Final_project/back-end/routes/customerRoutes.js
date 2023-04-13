const express = require('express');
const router = express.Router();
const validator = require('validator');
const Customers = require('./../models/customerModel');
const joi =  require('joi')


/*
* GET http://localhost:3001/api/customers
*/
router.get('/', async (req, res)=>{
 try {
            const result = await Customers.find({});
            res.json(result);
        }
        catch (err) {
            console.log(err);
            res.status(400).json({ error: 'error getting customers' });
        }

    })


/*
* GET http://localhost:3001/api/customers/534534545454
*/
router.get('/:id', async (req, res)=>{
     try {
            const schema = joi.object({
                id: joi.string().required(),
            });

            const { error, value } = schema.validate(req.params);

            if (error) {
                console.log(error.details[0].message);
                throw `error getting details`;
            }

            const customer = await Customers.findById(value.id);
            if (!customer) throw "Invalid customer id, no such customer.";
            res.json(customer);
        }
        catch (err) {
            res.status(400).json({ error: "Invalid data" });
            console.log(`Error: ${err}`);
        }
    })

/*
* POST http://localhost:3001/api/customers
*/
router.post('/', async (req, res)=>{
 try {
            const schema = joi.object({
                fname: joi.string().min(2).max(100).required(),
                lname: joi.string().min(2).max(100).required(),
                email: joi.string().required().email(),
                phone: joi.string().max(12).min(10).required(),
                address: joi.string().min(2).max(100).required()
            });

            const { error, value } = schema.validate(req.body);

            if (error) {
                console.log(error.details[0].message);
                throw 'error adding customer';
            }

            const customer = new Customers(value);
            const newCustomer = await customer.save();
            res.json(newCustomer);
        }
        catch (err) {
            console.log(err.message);
            res.status(400).json({ error: `error adding customer` });
        }
      })


/*
* PUT http://localhost:3001/api/customers/34343433334
*/
router.put('/:id', async (req, res)=>{
       try {
            const schema = joi.object({
                 fname: joi.string().min(2).max(100).required(),
                lname: joi.string().min(2).max(100).required(),
                email: joi.string().required().email(),
                phone: joi.string().max(20).min(6),
                address: joi.string().min(2).max(100)
            }).min(1);

            const { error, value } = schema.validate(req.body);

            if (error) {
                console.log(error.details[0].message);
                throw 'error updating customer';
            }

            const filter = {
                _id: req.params.id
            };

            const customer = await Customers.findOneAndUpdate(filter, value);
            if (!customer) throw "No customer with this ID in the database";
            const updated = await Customers.findById(customer._id);
            res.json(updated);
        }
        catch (err) {
            console.log(err.message);
            res.status(400).json({ error: err.message });
        }

    })


/*
* DELETE http://localhost:3001/api/customers/31322323232
*/
router.delete('/:id', async (req, res)=>{
      try {
            const schema = joi.object({
                id: joi.string().required(),
            });

            const { error, value } = schema.validate(req.params);

            if (error) {
                console.log(error.details[0].message);
                throw `error deleting customer`;
            }

            const deleted = await Customers.findOneAndRemove({
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