const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();
const mongoose = require('mongoose');
const users = require("./model/userModels");
const bodyParser = require("body-parser");
const Mailer = require ('./controllers/sendMail');
const cities = require ('./controllers/cities');
const FileUpload = require('./controllers/fileUpload'); 
const port = process.env.PORT || 5151;
const URI = process.env.uri
require('ejs')
app.set('view engine', 'ejs')
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true}))


mongoose.connect(URI)
  .then(() => {
    console.log("lift off'Database neuralink connected succesfully");
  })
  .catch((err) => {
    console.log(err);
  });            
app.post('/store', async(req, res)=> {
  try { 
    const {name, email, age, password} = req.body
    const newUser = new users({ name, email,age, password})
    await newUser.save()
    res.status(201).json({message: ' User added successfully', user: newUser})
   } catch(err) {
    console.log(err);
    res.status(500).json({message: err.message})    
   }
})

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
  // res.sendFile(__dirname + "/Public/index.html");
  res.render('index' , {title: 'First EJS Page', name: 'Oluwafemi' })
});
app.get('/signup', (req, res) => {
    res.render('pages/signup')
})
app.get('/signin', (req, res)=>{
  res.render('pages/signin')
})
app.get('/api',(req, res)=>{
  res.render('controllers/cities')
})





app.get('/dashboard',(req,res) => {
  fetch('https://second-class.vercel.app/api')
  .then(res => res.json())
  .then((data) => {
    console.log(data);
    res.render('pages/dashboard', {data})
  })
  .catch(err => console.log(err))
})
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
