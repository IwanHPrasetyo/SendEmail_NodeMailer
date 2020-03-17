const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "<Email Pengirim>",
    pass: "<Password>"
  }
});

let OTP = Math.floor(Math.random() * 10000);

let mailOptions = {
  from: "<Email Pengirim>",
  to: "<Email Penerima>",
  subject: "Authentifikasi",
  text: `Kode OTP ${OTP}`
};

transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("email sent" + info.response);
  }
});
