var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const creds = require('./config');

var transport = {
    host: 'smtp.mailtrap.io', // Don’t forget to replace with the SMTP host of your provider
    port: 2525,
    auth: {
        user: creds.USER,
        pass: creds.PASS
    }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages');
    }
});

router.post('/send', (req, res, next) => {
    var firstname = req.body.firstname
    var lastname = req.body.lastname
    var email = req.body.email
    var agent = req.body.agent
    var house = req.body.house
    var message = req.body.message
    var content = `First Name: ${firstname} \n Last Name: ${lastname} \n E-mail: ${email} \n Agent: ${agent} \n House: ${house} \n Message: ${message} `

    var mail = {
        from: email,
        to: 'kenes@cribs.com',  // Change to email address that you want to receive messages on
        subject: 'New Message from Contact Form',
        text: content
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
        }
    })
})

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3002)

