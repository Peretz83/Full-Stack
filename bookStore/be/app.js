let express = require('express')
let path = require('path')
let mongoose = require('mongoose')
let config = require('./config/database')
const cors = require('cors')
let bodyParser = require('body-parser')
mongoose.set('strictQuery', true);

console.log('it worked?????');

//Connect to db
mongoose.connect(config.database)
let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', () => {
  console.log('Connected to MongoDB');
})

//Init app
let app = express()
// cors
app.use(cors())
//View engine setup
app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'ejs')

//Set public folder
app.use(express.static(path.join(__dirname, 'public')))

//body Parser middleware
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

//Set routes
let books = require('./routes/books.js')
app.use('/api/books', books)

//Start the server
const port = 3002

app.listen(port, ()=>console.log(`listening to port http://localhost:${port}/api/books`))