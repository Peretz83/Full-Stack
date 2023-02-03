const express = require('express')
const server = express()
let bodyParser = require('body-parser')
require('./dal/dal')
const cors = require('cors')
server.use(cors())
// const CandyModelJOI = require('../models/candyModelJoi')

//body Parser middleware
server.use(bodyParser.urlencoded({
  extended: false
}));
server.use(bodyParser.json());

// server.use(express.static("fe"));
const candyRouter = require('./routers/candyRouter.js')
const authRouter = require('./routers/authRouter.js')
server.use('/api/candystore',candyRouter)
server.use('/api/auth',authRouter)

const port = 3003

server.listen(port, ()=>console.log(`PERETZ, You are listening to port http://localhost:${port}/api/candystore`))
// test