const express = require('express');
const mongoose = require('mongoose');
const empRouter = require('./employee/employee.router')

const cors = require('cors');
require('dotenv').config()
const app = express();

// mongodb url//
const url = "mongodb://localhost/EmployeeDB";

//connect with mongodb//

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;
con.on('open', () => {
  console.log("application is connected with mongodb")
})
app.use(cors());
app.use(express.json())

//defining url of router and connect it with our corresponding router//



app.use('/api', empRouter);
app.use(function (req, res, next) {
  next(createError(404));
});
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err);
});
app.listen(process.env.port, () => {
  console.log(`your app is running on ${process.env.port}`)
})