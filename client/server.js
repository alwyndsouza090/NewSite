const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');
const dotenv=require("dotenv");
dotenv.config()
const app = express();

const port =process.env.PORT || 4000;

// static files
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function(req,res){
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


// Set up Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASS,
  },
});

// Send email route
app.post('/send-email', upload.array('attachments'), (req, res) => {
  const { email, subject, password } = req.body;

  // Check if password is valid
  if (password !== process.env.ADMIN_PASS) {
    return res.status(401).json({ message: 'Invalid password' });
  }

  // Create mail options object
  const mailOptions = {
    from: 'online.7cbmstones@gmail.com',
    to: email,
    subject: subject,
    text: 'This is a test email from my website',
    attachments: req.files,
  };

  // Send email using transporter
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: 'Error sending email' });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({ message: 'Email sent successfully' });
    }
  });
});






app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

