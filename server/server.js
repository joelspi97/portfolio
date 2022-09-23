/* CONTACT FORM SCRIPT */

const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.json());

// The third argument is an array which contains the conditions for user validation.
app.post('/', urlencodedParser, [
  check(['userName', 'userEmail', 'userSubject', 'userMessage'], 'All fields require at least 4 character.')
    .exists()
    .isLength({ min: 4 }),
  check('userName', 'Use only alphabetic characters in the name field.')
    .custom(value => value.match(/^[a-zA-Z\s]*$/g)),
  check('userEmail', 'Insert a valid email with the following format: example@mail.com.')
    .isEmail()
    .normalizeEmail()
  
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  }

  // Since we are sending an email to my Gmail account, we need to use OAuth. 
  // Therefore, we need to specify that on the createTransport() configuration object.
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
      res.status(error.status || 500).json({
        error: {
          status: error.status || 500,
          message: error.message || 'Internal Server Error',
        }
      });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json('Success');
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
