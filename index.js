const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const path = require('path');
const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();
const mongoose = require('mongoose');
const users = require("./model/userModels");
const Mailer = require ('./controllers/sendMail');
const cities = require ('./controllers/cities');
const FileUpload = require('./controllers/fileUpload'); 
app.set('view engine', 'ejs')
app.use(express.json())
  
app.use(bodyParser.urlencoded({ extended: true}))
const userRoutes = require('./routes/user.router')
app.use('/user',userRoutes) 
app.set('views', path.join(__dirname, 'views'));

const port = process.env.PORT || 5153;
const URI = process.env.uri
require('ejs')


//  app.use(express.urlencoded)
mongoose.connect(URI)
  .then(() => {
    console.log("lift off'Database neuralink connected succesfully");
  })
  .catch((err) => {
    console.log(err);
  });            

app.get('/mail', Mailer)

app.get('/upload', FileUpload)
app.get('/allusers', async (req, res) => {
  try {
    const allUsers = await users.find()
    res.status(200).json(allUsers)
  } catch (err) {
    console.log(err);
    res.status(500).json({message: err.message})
  }
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/Public/index.html");
  res.render('index' , {title: 'First EJS Page', name: 'Oluwafemi' })
});

app.get('/api',cities)





app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
