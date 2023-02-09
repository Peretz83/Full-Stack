const express = require('express')
const server = express()
const bodyParser = require('body-parser')
require('./dal/dal')
const cors = require('cors')
const bookRouter = require('./routers/bookRouter.js')
const authRouter = require('./routers/authRouter.js')
const verify_logged_in = require('./middleware/verify_logged_in')


//body Parser middleware
server.use(bodyParser.urlencoded({
  extended: false
}));
server.use(bodyParser.json());
server.use(cors())
// server.use(verify_logged_in)
server.use('/api/books',bookRouter)
server.use('/api/auth', authRouter)

const port = 3007
server.listen(port, ()=>console.log(`listening to port http://localhost:${port}/api/books`))

