let express = require('express')
let mongoose = require('mongoose')
let config = require('./config/database')
mongoose.set('strictQuery', true);

//Connect to db
mongoose.connect(config.database)
let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', () => {
  console.log('Connected to MongoDB');
})

//Init app
let app = express()


//Set routes
let cars = require('./routes/carRouter.js')
app.use('/api/cars', cars)

//Start the server
const port = 3007

app.listen(port, ()=>console.log(`listening to port http://localhost:${port}/api/cars`))