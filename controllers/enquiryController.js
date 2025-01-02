const nodemailer = require("nodemailer");
const Enquiry = require("../models/Enquiry");

exports.sendEnquiryEmail = async (req, res) => {
  try {
    const enquiry = new Enquiry(req.body);

    await enquiry.validate();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: "New Enquiry Submitted",
      text: `A new enquiry has been submitted with the following details:\n\n
Name: ${enquiry.name}
Mobile Number: ${enquiry.mobileNumber}
Email: ${enquiry.email}
Work Type: ${enquiry.workType}
Location: ${enquiry.location}
Callback Time: ${enquiry.callbackTime}
Enquiry Details: ${enquiry.enquiryDetails}`
    };

    const info = await transporter.sendMail(mailOptions);

    res.status(200).json({
      message: "Enquiry email sent successfully",
      info: info.response,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
