if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

app.use(express.json());

app.post('/', (req, res) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS
    } 
  });

  const mailOptions = {
    to: process.env.EMAIL,
    subject: `Message from ${req.body.userName}: ${req.body.userSubject}`,
    text: `
Sender's email: ${req.body.userEmail}
Message: 
${req.body.userMessage}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Nodemailer error: ' + error);
      return res.status(500).jsonp({ message: 'Error!' });
    } else {
      console.log('Email sent: ' + info.response);
      return res.status(200).jsonp({ message: 'Funco!' });
    }
  })
});

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
