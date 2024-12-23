const nodemailer = require("nodemailer");
const Query = require("../models/Query");

exports.sendQueryEmail = async (req, res) => {
  try {
    const query = new Query(req.body);

    await query.validate();

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
      subject: "New Query Submitted",
      text: `A new query was submitted with the following details:\n\n
Name: ${query.name}
Phone Number: ${query.phno}
Email: ${query.email}
Location: ${query.location}
Work Description: ${query.work_description}
Free Time: ${query.free_time}`,
    };

    const info = await transporter.sendMail(mailOptions);

    res.status(200).json({
      message: "Query email sent successfully",
      info: info.response,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
