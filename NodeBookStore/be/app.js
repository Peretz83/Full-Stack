const express = require('express')
const server = express()
let bodyParser = require('body-parser')
require('./dal/dal')
const cors = require('cors')
server.use(cors())

//body Parser middleware
server.use(bodyParser.urlencoded({
  extended: false
}));
server.use(bodyParser.json());


const bookRouter = require('./routers/bookRouter.js')
const authRouter = require('./routers/authRouter.js')
server.use('/api/books',bookRouter)
server.use('/api/auth', authRouter)
const port = 3007

server.listen(port, ()=>console.log(`listening to port http://localhost:${port}/api/books`))

// test