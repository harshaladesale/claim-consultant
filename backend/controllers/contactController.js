const Contact = require("../models/Contact");

exports.createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const newContact = new Contact({
      name,
      email,
      phone,
      message
    });
    await newContact.save();
    res.status(201).json({ msg: "Contact submitted successfully" });

  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
