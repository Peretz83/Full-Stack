const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = express();
const port = process.env.MY_PORT;
app.use(express.json());
const lecturerRoute = require('./routes/lecturerRoutes');

mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGO_DB, {
  useNewUrlParser: true,
  // useCreateIndex: true,
  // useFindAndModify: false,
  useUnifiedTopology: true
}).then(() => {
    console.log(`Connected to MongoDB`);
}).catch(err => {
    console.log(err);
});

app.use('/api/lecturers', lecturerRoute);


app.listen(port, ()=>console.log(`Listening to port http://localhost:${port}/api/lecturers`))