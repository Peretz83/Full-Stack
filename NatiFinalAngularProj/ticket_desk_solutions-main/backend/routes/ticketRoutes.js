const express = require('express');
const router = express.Router();
const joi = require('joi');
const Tickets = require('./../models/ticketModel')


/*
* GET http://localhost:3001/api/tickets
*/
router.get('/', async (req, res)=>{
 try {
            const result = await Tickets.find({});
            res.json(result);
        }
        catch (err) {
            console.log(err);
            res.status(400).json({ error: 'error getting customers' });
        }

    })


/*
* GET http://localhost:3001/api/tickets/54545454
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

            const ticket = await Tickets.findById(value.id);
            if (!ticket) throw "Invalid ticket id, no such ticket.";
            res.json(ticket);
        }
        catch (err) {
            res.status(400).json({ error: "Invalid data" });
            console.log(`Error: ${err}`);
        }
    })

/*
* POST http://localhost:3001/api/tickets
*/
router.post('/', async (req, res)=>{
 try {
            const schema = joi.object({
                status: joi.string().min(2).max(100),
                priority: joi.string().min(2).max(100),
                agent: joi.string().min(2).max(100),
                subject: joi.string().min(2).max(100),
                message: joi.string().min(2).max(3000)
            });

            const { error, value } = schema.validate(req.body);

            if (error) {
                console.log(error.details[0].message);
                throw 'error adding ticket';
            }

            const ticket = new Tickets(value);
            const newTicket = await ticket.save();
            res.json(newTicket);
        }
        catch (err) {
            console.log(err.message);
            res.status(400).json({ error: `error adding ticket` });
        }
      })

/*
* PUT http://localhost:3001/api/tickets/34343433334
*/
router.put('/:id', async (req, res)=>{
       try {
            const schema = joi.object({
                status: joi.string().min(2).max(100),
                priority: joi.string().min(2).max(100),
                agent: joi.string().min(2).max(100),
                subject: joi.string().min(2).max(100),
                message: joi.string().min(2).max(3000)
            }).min(1);

            const { error, value } = schema.validate(req.body);

            if (error) {
                console.log(error.details[0].message);
                throw 'error updating ticket';
            }

            const filter = {
                _id: req.params.id
            };

            const ticket = await Tickets.findOneAndUpdate(filter, value);
            if (!ticket) throw "No ticket with this ID in the database";
            const updated = await Tickets.findById(ticket._id);
            res.json(updated);
        }
        catch (err) {
            console.log(err.message);
            res.status(400).json({ error: err.message });
        }

    })

module.exports = router;