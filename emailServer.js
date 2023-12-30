const express = require('express');
const app =  express()
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
    const { firstName, lastName, email, industry, company, country, message } = req.body;

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'amplificallc@gmail.com',
            pass: 'amplificaais'
        }
    });

    const mailOptions = {
        from: `${email}`,
        to: 'amplificallc@gmail.com',
        subject: 'New Contact Form Submission',
        text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nIndustry: ${industry}\nCompany: ${company}\nCountry: ${country}\nMessage: ${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        res.status(500).send('Failed to send email');
    }
});

app.listen(port);
