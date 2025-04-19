const nodemailer = require('nodemailer')
const dotenv = require('dotenv').config();
const sendMail= (req, res) => {
    // res.send('i wanna send mail');
    let transporter= nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.USER_G,
      pass: process.env.PASS_G,
    }
  })
  const mailOptions = {
    from: 'Yourself  "<okedijim3@gmail.com>"',
    to: 'veolastanton@gmail.com,Ktm1001@yahoo.com',
    subject: 'Incoming message from mary jones',
    text: 'That was easy!'
  }
  transporter.sendMail(mailOptions)
  .then((result)=>{
    res.status(201).json({message: 'emaill sent successfully'})
    console.log(result);
    
  })
  .catch((err)=>{
    console.log(err);
    
  })
  }
   module.exports = sendMail