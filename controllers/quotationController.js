const nodemailer = require("nodemailer");
const Quotation = require("../models/Quotation");

exports.sendQuotationEmail = async (req, res) => {
  try {
    const quotation = new Quotation(req.body);

    await quotation.validate();

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
      subject: "New Quotation Request Submitted",
      text: `A new quotation request has been submitted with the following details:\n\n
Name: ${quotation.name}
Mobile Number: ${quotation.mobileNumber}
Email: ${quotation.email}
Work Type: ${quotation.workType}
Location: ${quotation.location}
Inspection Consent: ${quotation.inspectionConsent}
Contact Time: ${quotation.contactTime}
Requirements: ${quotation.requirements}`
    };

    const info = await transporter.sendMail(mailOptions);

    res.status(200).json({
      message: "Quotation email sent successfully",
      info: info.response,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
