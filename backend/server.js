if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

app.use(express.json());

app.post('/', (req, res) => {
  if (
    req.body.userName === '' || 
    req.body.userSubject === '' || 
    req.body.userEmail === '' || 
    req.body.userMessage === '' || 
    !(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(req.body.userEmail))
  ) {
    return res.status(400).json({ errorMessage: 'Some of the required information is either missing or malformatted. Please, correct your data and try again.' });
  }

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
Message: ${req.body.userMessage}
`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ errorMessage: 'A server error has occurred. Please, try again later.' });
    } else {
      return res.status(200).json({});
    }
  })
});

app.listen(process.env.PORT, console.log(`Server running on port ${process.env.PORT}`));
