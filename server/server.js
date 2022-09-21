const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

app.post('/', (req, res) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
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
      return res.status(500).json({ message: 'Error!' });
    } else {
      console.log('Email sent: ' + info.response);
      return res.status(200).json({ message: 'Funco!' });
    }
  })
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
