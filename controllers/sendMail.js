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
    from: 'info@paperles.com.au  "<info@paperles.com.au>"',
    to: 'veolastanton@gmail.com,Ktm1001@yahoo.com,feranmioyejide84@gmail.com',
    subject: 'Incoming message from mary jones',
    html: `
<html>
  <head>
    <meta charset="UTF-8">
    <title>Shoe Promotion Email</title>
    <style>
      body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f8f9fa;
        color: #212529;
      }
      .container {
        width: 100%;
        max-width: 600px;
        margin: auto;
        background-color: #ffffff;
        padding: 20px;
        border-radius: 6px;
        box-shadow: 0 2px 6px rgba(0,0,0,0.05);
      }
      .btn {
        display: inline-block;
        background-color: #007bff;
        color: #ffffff !important;
        padding: 12px 20px;
        text-decoration: none;
        border-radius: 4px;
        font-weight: bold;
        margin-top: 15px;
      }
      .header {
        text-align: center;
        padding-bottom: 20px;
      }
      .footer {
        font-size: 12px;
        text-align: center;
        color: #6c757d;
        margin-top: 30px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Step Into Style 👟</h1>
        <p><strong>Your perfect pair is waiting.</strong></p>
      </div>

      <p>Hi [First Name],</p>

      <p>Looking to upgrade your shoe game? Our newest arrivals combine <strong>comfort</strong>, <strong>style</strong>, and that unbeatable <strong>confidence boost</strong> that comes with wearing the right pair.</p>

      <ul>
        <li>✨ Cloud-like comfort insoles</li>
        <li>👞 Sleek designs for any outfit</li>
        <li>🚀 Lightweight & durable materials</li>
      </ul>

      <p><strong>Use code <span style="color:#007bff;">WELCOME15</span> to get 15% off your first order.</strong></p>

      <a href="https://www.yourshoestore.com/new-arrivals" class="btn">Shop Now</a>

      <p class="footer">
        Free shipping on all orders $50+ | Questions? <a href="mailto:support@yourshoestore.com">Contact us</a>
      </p>
    </div>
  </body>
</html>
`
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