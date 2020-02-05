
// send en email
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "ecf4aa8f8ba43f",
    pass: "14e1fc83a9ff38"
  }
});

var mailOptions = {
    from: 'info@gmail.com',
    to: '@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'Welcome to this Website!!'
};

function sendemail(address){
    mailOptions.to = address;
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
        console.log(error);
        } else {
        console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = sendemail;
   