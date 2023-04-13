const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = express();
const port = process.env.MY_PORT;
app.use(express.json());
const userRouter = require('./routes/userRoutes');
const customerRouter = require('./routes/customerRoutes');
const employeeRouter = require('./routes/employeeRoutes');

const cors = require('cors');
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

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,PATCH,DELETE,OPTIONS"
  );
  next();
});

app.use('/api/users', userRouter);
app.use('/api/customers', customerRouter);
app.use('/api/employees', employeeRouter);


app.listen(port, ()=>console.log(`Listening to port http://localhost:${port}/api/users`))